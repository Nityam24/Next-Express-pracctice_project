const express = require("express");
const app = express();
const cors = require("cors");
const PORT = 8080;
app.use(cors());

app.get("/api/home", (req, res) => {
  res.json({ message: "Welcome again brother!!" });
});

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));
