CREATE TABLE IF NOT EXISTS branches(
  id VARCHAR(40) PRIMARY KEY,
  created TIMESTAMP,
  updated TIMESTAMP,
  latest_step BIGINT,
  parent_chkpt VARCHAR(43),
  parent_step_offset BIGINT,
  ws_name VARCHAR(100),
  repo_path VARCHAR(500));
