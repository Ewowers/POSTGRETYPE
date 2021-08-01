const Model = require("../model/Model");
class Logic {
  async add(req, res) {
    //добавление в бд
    let index = await Model.find();
    let model = new Model({
      obj: { ...req.body },
      index: index.length,
    });
    await model.save();
    return res.end();
  }
  async get(req, res) {
    //получение из бд всех
    const model = await Model.find({});
    console.log("get");
    return res.json(model);
  }
  async getOne(req, res) {
    //получение по id
    const { id } = req.params;
    const model = await Model.findById(id);
    return res.json(model);
  }
}
module.exports = new Logic();
