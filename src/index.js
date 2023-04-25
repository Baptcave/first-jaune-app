const express = require("express");
const dataSource = require("./utils").dataSource;
const wilderController = require("./controller/wilder");
const skillController = require("./controller/skill");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.post("/api/wilders", wilderController.create);
app.get("/api/wilders", wilderController.read);
app.put("/api/wilders/:id", wilderController.update);
app.delete("/api/wilders/:id", wilderController.delete);

app.post("/api/skills", skillController.create);
app.get("/api/skills", skillController.read);
app.put("/api/skills/:id", skillController.update);
app.delete("/api/skills/:id", skillController.delete);

app.use((req, res, next) => {
	res.status(404).send("Sorry can't find that!");
});

const start = async () => {
  await dataSource.initialize();
  app.listen(3000, () => console.log("Server started on 3000"));
}

start();