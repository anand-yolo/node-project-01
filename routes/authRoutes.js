const express = require("express");
const router = express.Router();

const { loginUser } = require("../service/authService");

router.post("/login", async (req, res) => {
  try {
    const result = await loginUser(
      req.body.email,
      req.body.password
    );

    res.json(result);
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
});

module.exports = router;