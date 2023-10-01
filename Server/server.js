const express = require("express");
const app = express();
const PORT = 8080;
app.use(cors());

app.get("/api/home", (req, res) => {
  res.json({ message: "Welcome to the home page!" });
});

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));
