const express = require("express");
const app = express();
const port = normalizePort(process.env.PORT || 5000);
const router = express.Router();

app.listen(port, () => console.log(`Listening on port ${port}`));

app.get("/express_backend", (req, res, next) => {
  res.send({ express: "Connected" });
});

module.exports = router;

app.use("/testAPI", testAPIRouter);
