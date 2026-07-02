const express = require("express");
const router = express.Router();
const multer = require("multer");

const upload = require("../midlware/multer")
const { loginUser ,createUser} = require("../service/authService");

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
router.post("/create",upload.single("file"),createUser)

module.exports = router;