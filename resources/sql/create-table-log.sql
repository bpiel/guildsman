CREATE TABLE IF NOT EXISTS log(
  step BIGINT PRIMARY KEY,
  entry BLOB
  chkpt_id VARCHAR(255));
