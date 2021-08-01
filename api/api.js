const { Router } = require("express");
//const logic = require("./logic");
const control = require("./api.control");
const router = Router();
router.post("/add", control.add); //добавление в бд
router.get("/", control.get); //получение всего бд
router.get("/id=:id", control.getOne); //получение по id
module.exports = router;
