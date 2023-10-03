const express = require("express");
const app = express();
const cors = require("cors");
const PORT = 8080;
app.use(cors());

app.get("/api/home", (req, res) => {
  res.send(json({ message: "Welcome to the home page!" }));
});

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));
