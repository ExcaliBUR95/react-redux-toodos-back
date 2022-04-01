const express = require("express");

const mongoose = require("mongoose");

const cors = require("cors");

const port = 3001;

const app = express();

app.use(cors());
app.use(express.json());

app.use(require("./routes/todoList.route"));

mongoose
  .connect(
    "mongodb+srv://into:code@cluster0.odtfl.mongodb.net/ToDOLisTBackMarch"
  )
  .then(() => {
    console.log("Монгусь склеился");
  });

app.listen(port, () => {
  console.log("Слушает твои команды http://localhost:" + port);
});
