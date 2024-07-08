import express from "express";

const app = express();

const PORT = 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("healthy server");
});

app.listen(PORT, () => {
  console.log("running on port: ", PORT);
});
