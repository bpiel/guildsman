CREATE TABLE IF NOT EXISTS chkpts(
  id VARCHAR(43) PRIMARY KEY,
  branch_id VARCHAR(40),
  step BIGINT,  
  created TIMESTAMP,
  updated TIMESTAMP,
  wf_name VARCHAR(100),
  exists_local BOOLEAN,
  protected BOOLEAN);
