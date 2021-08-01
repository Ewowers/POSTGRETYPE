const axios = require("axios");
const db = require("./model/ModelPG");
const get = async () => {
  const base = await db.query("select * from model");
  if (base.rows.length !== 0) return;
  const { data } = await axios.get("http://jservice.io/api/random?count=100");
  data.forEach((element) => {
    console.log(element);
  });
  data.forEach(async (element, i) => {
    const { answer, question, value, airdate, created_at, updated_at, category_id, game_id, invalid_count } = element;
    // const obj = {
    //   answer: element.answer,
    //   question: element.question,
    //   value: element.value,
    //   airdate: element.airdate,
    //   created_at: element.created_at,
    //   updated_at: element.updated_at,
    //   category_id: element.category_id,
    //   game_id: element.game_id,
    //   invalid_count: element.invalid_count,
    // };
    const key = [
      "answer",
      "question",
      "value",
      "airdate",
      "created_at",
      "updated_at",
      "category_id",
      "game_id",
      "invalid_count",
    ];
    const values = [answer, question, value, airdate, created_at, updated_at, category_id, game_id, invalid_count];

    await db.query(
      `insert into model (${key.join(", ")}) values (${values.map((item, i) => `$${i + 1}`).join(", ")})`,
      values
    );
  });
};

module.exports = get;
