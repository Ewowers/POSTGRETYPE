const db = require("../model/ModelPG");
class ApiControl {
  async get(req, res) {
    const base = await db.query("select * from model");
    console.log(base.rows);
    return res.json(base.rows);
  }
  async getOne(req, res) {
    const { id } = req.params;
    const base = await db.query("select * from model where id = $1", [id]);
    console.log(base);
    return res.json(base.rows[0]);
  }
  async add(req, res) {
    const key = Object.keys(req.body);
    const value = Object.values(req.body);
    let arr = [];
    for (let i = 1; i <= value.length; i++) {
      arr.push(i);
    }
    const end = await db.query(
      `insert into model (${key.join(", ")}) values (${value.map((item, i) => `$${item + 1}`).join(", ")}) returning *`,
      value
    );
    return res.status(200).json(end.rows[0]);
  }
}
module.exports = new ApiControl();
