const axios = require("axios");
const Model = require("./model/Model");
const get = async () => {
  const finds = await Model.find({});
  if (finds.length !== 0) return;
  const { data } = await axios.get("http://jservice.io/api/random?count=100");
  data.forEach(async (element, i) => {
    console.log(i);
    const model = new Model({
      id: element.id,
      answer: element.answer,
      question: element.question,
      value: element.value,
      airdate: element.airdate,
      created_at: element.created_at,
      updated_at: element.updated_at,
      category_id: element.category_id,
      game_id: element.game_id,
      invalid_count: element.invalid_count,
      category: element.category,
    });
    await model.save();
  });
};

module.exports = get;
