CREATE TABLE model (
  id SERIAL PRIMARY KEY, 
  answer VARCHAR(255),
  questionVARCHAR(255),
  value INTEGER,
  airdate VARCHAR(255),
  created_at VARCHAR(255),
  updated_at VARCHAR(255),
  category_id INTEGER,
  game_id INTEGER,
  invalid_count INTEGER, 
);
