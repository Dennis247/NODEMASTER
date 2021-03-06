const express = require("express");
const router = express.Router();
const path = require("path");
const rootDir = require("../utils/path");
const adminData = require("./admin");

router.get("/", (req, res, next) => {
  console.log(adminData.products);
  res.sendFile(path.join(rootDir, "Views", "shop.html"));
});

module.exports = router;
