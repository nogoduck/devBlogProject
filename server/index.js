const express = require("express");
const app = express();

// console.log(app);
const port = 3005;

app.get("/", (req, res) => {
  res.send(
    "<ul><li>3003</li><li>305553</li><li>4563003</li><li>3213003</li></ul>"
  );
});

app.listen(port, () => {
  console.log(`${port}포트에서 대기중`);
});
