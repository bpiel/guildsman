function histogramSeries (config)
{

    var bins = "bins";
    var x = "x";
    var y = "y";
    var dx = "dx";
    var svg = config.container;

    var duration = 0;

    //
    // Data verification
    //
    if (duration === undefined) throw(new Error("vz-histogram-timeseries _draw needs duration"));
    if (config.data.length <= 0) throw(new Error("Not enough steps in the data"));
    if (!config.data[0].hasOwnProperty(bins)) throw(new Error("No bins property of '" + bins + "' in data"));
    if (config.data[0][bins].length <= 0) throw(new Error("Must have at least one bin in bins in data"));
    if (!config.data[0][bins][0].hasOwnProperty(x)) throw(new Error("No x property '" + x + "' on bins data"));
    if (!config.data[0][bins][0].hasOwnProperty(dx)) throw(new Error("No dx property '" + dx + "' on bins data"));
    if (!config.data[0][bins][0].hasOwnProperty(y)) throw(new Error("No y property '" + y + "' on bins data"));

    //
    // Initialization
    //
    var timeProp = config.timeProperty;
    var xProp = "x";
    var binsProp = "bins";
    var dxProp = "dx";
    var yProp = "y";
    
    var data = config.data;
    var mode = config.mode;
    var color = d3.hcl(40, 100, 60); // TODO
    var tooltip = d3.select(x.tooltip);

    var xAccessor = function(d) { return d[xProp] };
    var yAccessor = function(d) { return d[yProp] };
    var dxAccessor = function(d) { return d[dxProp] };
    var xRightAccessor = function(d) { return d[xProp] + d[dxProp] };
    var timeAccessor = function(d) { return d[timeProp] };

    if (timeProp === "relative") {
        timeAccessor = function(d) { return d.wall_time - data[0].wall_time };
    }

    var brect = svg.getBoundingClientRect();
    var outerWidth = brect.width,
        outerHeight = brect.height;

    var sliceHeight,
        margin = {top: 5, right: 60, bottom: 20, left: 24};

    if (mode === "offset") {
        sliceHeight = outerHeight / 2.5;
        margin.top = sliceHeight + 5;
    } else {
        sliceHeight = outerHeight - margin.top - margin.bottom;
    }

    var width = outerWidth - margin.left - margin.right,
        height = outerHeight - margin.top - margin.bottom;

    var leftMin = d3.min(data, xAccessor),
        rightMax = d3.max(data, xRightAccessor);

    //
    // Text formatters
    //
    var format = d3.format(".3n");
    var yAxisFormat = d3.format(".0f");

    if (timeProp === "wall_time") {
        yAxisFormat = d3.timeFormat("%m/%d %X");
    } else if (timeProp === "relative") {
        yAxisFormat = function(d) {
            return d3.format(".1r")(d / 3.6e6) + 'h'; // Convert to hours.
        };
    }

    //
    // Calculate the extents
    //
    var xExtents = data.map(function(d, i) {
        return [
            d3.min(d[binsProp], xAccessor),
            d3.max(d[binsProp], xRightAccessor)
        ];
    });
    var yExtents = data.map(function(d) {
        return d3.extent(d[binsProp], yAccessor);
    });

    //
    // Scales and axis
    //
    var outlineCanvasSize = 500;

    var extent = d3.extent(data, timeAccessor);

    var yScale = (timeProp === "wall_time" ? d3.scaleTime() : d3.scaleLinear())
        .domain(extent)
        .range([0, (mode === "offset" ? height : 0)]);

    var ySliceScale = d3.scaleLinear()
        .domain([0, d3.max(data, function(d, i) { return yExtents[i][1]; })])
        .range([sliceHeight, 0]);

    var yLineScale = d3.scaleLinear()
        .domain(ySliceScale.domain())
        .range([outlineCanvasSize, 0]);

    var xScale = d3.scaleLinear()
        .domain([
            d3.min(data, function(d, i) { return xExtents[i][0]; }),
            d3.max(data, function(d, i) { return xExtents[i][1]; })
        ])
        .nice()
        .range([0, width]);

    var xLineScale = d3.scaleLinear()
        .domain(xScale.domain())
        .range([0, outlineCanvasSize]);

    var outlineColor = d3.scaleLinear()
        .domain(d3.extent(data, timeAccessor))
        .range([color.darker(), color.brighter()])
        .interpolate(d3.interpolateHcl);

    var xAxis = d3.axisBottom(xScale).ticks(Math.max(2, width / 20));

    var yAxis = d3.axisRight(yScale)
        .ticks(Math.max(2, height / 15))
        .tickFormat(yAxisFormat);



    var ySliceAxis = d3.axisRight(ySliceScale)
        .ticks(Math.max(2, height / 15))
        .tickSize(width + 5)
        .tickFormat(format);

    var xBinCentroid = function(d) {
        return d[xProp] + d[dxProp] / 2;
    };

    var linePath = d3.line()
        .x(function(d) { return xLineScale(xBinCentroid(d)); })
        .y(function(d) { return yLineScale(d[yProp]); });

    var path = function(d) {
        // Draw a line from 0 to the first point and from the last point to 0.
        return 'M' + xLineScale(xBinCentroid(d[0])) + ',' + yLineScale(0) +
            'L' + linePath(d).slice(1) +
            "L" + xLineScale(xBinCentroid(d[d.length - 1])) + "," + yLineScale(0);
    };

    //
    // Render
    //
    var svgNode = svg;

    var svg = d3.select(svgNode)

    var svgTransition = svg.transition().duration(duration);

    var g = svg.select("g")
        .classed("small", function() { return (width > 0 && width <= 150); })
        .classed("medium", function() { return (width > 150 && width <= 300); })
        .classed("large", function() { return (width > 300); })

    var gTransition = svgTransition.select("g")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    var bisect = d3.bisector(xRightAccessor).left;
    var stage = g.select(".stage")
        .on("mouseover", function() {
            hoverUpdate.style("opacity", 1);
            xAxisHoverUpdate.style("opacity", 1);
            yAxisHoverUpdate.style("opacity", 1);
            ySliceAxisHoverUpdate.style("opacity", 1);
            tooltip.style("opacity", 1);
        })
        .on("mouseout", function() {
            hoverUpdate.style("opacity", 0);
            xAxisHoverUpdate.style("opacity", 0);
            yAxisHoverUpdate.style("opacity", 0);
            ySliceAxisHoverUpdate.style("opacity", 0);
            hoverUpdate.classed("hover-closest", false);
            outlineUpdate.classed("outline-hover", false);
            tooltip.style("opacity", 0);
        })
        .on("mousemove", onMouseMove);

    var background = stage.select(".background")
        .attr("transform", "translate(" + -margin.left + "," + -margin.top + ")")
        .attr("width", outerWidth)
        .attr("height", outerHeight);

    var histogram = stage.selectAll(".histogram").data(data),
        histogramExit = histogram.exit().remove(),
        histogramEnter = histogram.enter().append("g").attr("class", "histogram"),
        histogramUpdate = histogramEnter.merge(histogram)
        .sort(function(a, b) { return timeAccessor(a) - timeAccessor(b); }),
        histogramTransition = gTransition.selectAll(".histogram")
        .attr("transform", function(d) {
            return "translate(1, " +
                (mode === "offset" ? (yScale(timeAccessor(d)) - sliceHeight) : 0) + ")";
        });

    var baselineEnter = histogramEnter.append("line").attr("class", "baseline"),
        baselineUpdate = histogramTransition.select(".baseline")
        .style("stroke-opacity", function(d) { return (mode === "offset" ? 0.1 : 0); })
        .attr("y1", sliceHeight)
        .attr("y2", sliceHeight)
        .attr("x2", width);

    var outlineEnter = histogramEnter.append("path").attr("class", "outline"),
        outlineUpdate = histogramUpdate.select(".outline")
        .attr("vector-effect", "non-scaling-stroke")
        .attr("d", function(d) { return path(d[binsProp]); })
        .style("stroke-width", 1),
        outlineTransition = histogramTransition.select(".outline")
        .attr("transform", "scale(" + width / outlineCanvasSize + ", " +
              sliceHeight / outlineCanvasSize + ")")
        .style("stroke", function(d) {
            return (mode === "offset" ? "white" : outlineColor(timeAccessor(d)));
        })
        .style("fill-opacity", function(d) { return (mode === "offset" ? 1 : 0); })
        .style("fill", function(d) { return outlineColor(timeAccessor(d)); });

    var hoverEnter = histogramEnter.append("g")
        .attr("class", "hover")
        .style("fill", function(d) { return outlineColor(timeAccessor(d)); }),
        hoverUpdate = histogramUpdate.select(".hover");

    hoverEnter.append("circle")
        .attr("r", 2);

    hoverEnter.append("text")
        .style("display", "none")
        .attr("dx", 4);

    var xAxisHover = g.select(".x-axis-hover").selectAll(".label").data(["x"]),
        xAxisHoverEnter = xAxisHover.enter().append("g").attr("class", "label"),
        xAxisHoverUpdate = xAxisHover.merge(xAxisHoverEnter);

    xAxisHoverEnter.append("rect")
        .attr("x", -20)
        .attr("y", 6)
        .attr("width", 40)
        .attr("height", 14)

    xAxisHoverEnter.append("line")
        .attr("x1", 0)
        .attr("x2", 0)
        .attr("y1", 0)
        .attr("y2", 6);

    xAxisHoverEnter.append("text")
        .attr("dy", 18);

    var yAxisHover = g.select(".y-axis-hover").selectAll(".label").data(["y"]),
        yAxisHoverEnter = yAxisHover.enter().append("g").attr("class", "label"),
        yAxisHoverUpdate = yAxisHover.merge(yAxisHoverEnter);

    yAxisHoverEnter.append("rect")
        .attr("x", 8)
        .attr("y", -6)
        .attr("width", 40)
        .attr("height", 14)

    yAxisHoverEnter.append("line")
        .attr("x1", 0)
        .attr("x2", 6)
        .attr("y1", 0)
        .attr("y2", 0);

    yAxisHoverEnter.append("text")
        .attr("dx", 8)
        .attr("dy", 4);

    var ySliceAxisHover = g.select(".y-slice-axis-hover").selectAll(".label").data(["y"]),
        ySliceAxisHoverEnter = ySliceAxisHover.enter().append("g").attr("class", "label"),
        ySliceAxisHoverUpdate = ySliceAxisHover.merge(ySliceAxisHoverEnter);

    ySliceAxisHoverEnter.append("rect")
        .attr("x", 8)
        .attr("y", -6)
        .attr("width", 40)
        .attr("height", 14)

    ySliceAxisHoverEnter.append("line")
        .attr("x1", 0)
        .attr("x2", 6)
        .attr("y1", 0)
        .attr("y2", 0);

    ySliceAxisHoverEnter.append("text")
        .attr("dx", 8)
        .attr("dy", 4);

    gTransition.select(".y.axis.slice")
        .style("opacity", mode === "offset" ? 0 : 1)
        .attr("transform", "translate(2, " + (mode === "offset" ? -sliceHeight : 0) + ")")
        .call(ySliceAxis);

    gTransition.select(".x.axis")
        .attr("transform", "translate(3, " + height + ")")
        .call(xAxis);

    gTransition.select(".y.axis")
        .style("opacity", mode === "offset" ? 1 : 0)
        .attr("transform", "translate(" + width + ", " + (mode === "offset" ? 0 : height) + ")")
        .call(yAxis);

    gTransition.selectAll(".tick text")
        .attr("fill", "#aaa");
    gTransition.selectAll(".axis path.domain").attr("stroke", "none");


    function onMouseMove() {
        var m = d3.mouse(this),
            v = xScale.invert(m[0]),
            t = yScale.invert(m[1]);

        function hoverXIndex(d) {
            return Math.min(d[binsProp].length - 1, bisect(d[binsProp], v));
        }
        var closestSliceData;
        var closestSliceDistance = Infinity;
        var lastSliceData;
        hoverUpdate
            .attr("transform", function(d, i) {
                var index = hoverXIndex(d);
                lastSliceData = d;
                var x = xScale(d[binsProp][index][xProp] + d[binsProp][index][dxProp] / 2);
                var y = ySliceScale(d[binsProp][index][yProp]);
                var globalY = (mode === "offset" ? yScale(timeAccessor(d)) - (sliceHeight - y) : y);
                var dist = Math.abs(m[1] - globalY);
                if (dist < closestSliceDistance) {
                    closestSliceDistance = dist;
                    closestSliceData = d;
                }
                return "translate(" + x + "," + y + ")";
            });
        hoverUpdate.select("text").text(function(d) {
            var index = hoverXIndex(d);
            return d[binsProp][index][yProp];
        })
        hoverUpdate.classed("hover-closest", function(d) { return d === closestSliceData; });
        outlineUpdate.classed("outline-hover", function(d) { return d === closestSliceData; });

        var index = hoverXIndex(lastSliceData);

        xAxisHoverUpdate
            .attr("transform", function(d) {
                return "translate(" +
                    xScale(lastSliceData[binsProp][index][xProp] +
                           lastSliceData[binsProp][index][dxProp] / 2) + ", " +
                    height + ")";
            })
            .select("text")
            .text(function(d) { return format(lastSliceData[binsProp][index][xProp] +
                                              lastSliceData[binsProp][index][dxProp] / 2); });

        var fy = yAxis.tickFormat();
        yAxisHoverUpdate
            .attr("transform", function(d) {
                return "translate(" + width + ", " +
                    (mode === "offset" ? yScale(timeAccessor(closestSliceData)) : 0) + ")";
            })
            .style("display", mode === "offset" ? "" : "none")
            .select("text")
            .text(function(d) { return fy(timeAccessor(closestSliceData));});

        var fsy = ySliceAxis.tickFormat();
        ySliceAxisHoverUpdate
            .attr("transform", function(d) {
                return "translate(" + width + ", " +
                    (mode === "offset" ? 0 : ySliceScale(closestSliceData[binsProp][index][yProp])) +
                    ")";
            })
            .style("display", mode === "offset" ? "none" : "")
            .select("text")
            .text(function(d) { return fsy(closestSliceData[binsProp][index][yProp]); });

        var svgMouse = d3.mouse(svgNode);
        tooltip.style("transform", "translate(" + (svgMouse[0] + 15) + "px," +
                      (svgMouse[1] - 15) + "px)")
            .select('span')
            .text(mode === "offset" ?
                  fsy(closestSliceData[binsProp][index][yProp]) :
                  (timeProp === "step" ? "step " : "") +
                  fy(timeAccessor(closestSliceData)));
    }
}
