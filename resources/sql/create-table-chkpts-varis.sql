CREATE TABLE IF NOT EXISTS chkpts_varis(
  id BIGINT AUTO_INCREMENT PRIMARY KEY,
  chkpt_id VARCHAR(43),
  vari_id VARCHAR(100),
  shape VARCHAR(50),
  dtype VARCHAR(20));