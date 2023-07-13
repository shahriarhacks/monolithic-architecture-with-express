const express = require("express");
const router = express.Router();

router.get("/health", (_req, res) => {
    // throw new Error('Something went wrong')
  res.status(200).json({
    status: 200,
    request: true,
    message: "Successful",
  });
});


module.exports= router