const express = require("express");

const app = express();

app.get("/health", (_req, res) => {
  res.status(200).json({
    status: true,
    request: "Success",
    message: "Request Done",
  });
});

module.exports=app;