CREATE TABLE IF NOT EXISTS branches(
  id VARCHAR(40) PRIMARY KEY,
  created TIMESTAMP,
  updated TIMESTAMP,
  steps BIGINT,
  parent_chkpt VARCHAR(43),
  parent_offset_steps BIGINT,
  ws_name VARCHAR(100));
