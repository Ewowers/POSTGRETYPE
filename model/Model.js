const { Schema, model } = require("mongoose");
const schema = new Schema({
  id: Number,
  answer: String,
  question: String,
  value: Number,
  airdate: String,
  created_at: String,
  updated_at: String,
  category_id: Number,
  game_id: Number,
  invalid_count: Number,
  category: Object,
});
module.exports = model("model", schema);
