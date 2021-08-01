const express = require("express");
const api = require("./api/api");
const openApi = require("./openAPIpostgresql");
const app = express();
openApi();
app.use(express.json());
app.use("/api", api);
const port = process.env.PORT || 8001;
app.listen(port, () => {
  console.log("http://localhost:" + port);
});
