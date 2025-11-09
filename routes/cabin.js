const express = require("express");
const { getCabins, getCabin } = require("../controller/cabin.controller");

const router = express.Router();

router.get("/", getCabins);
router.get("/:id", getCabin);
router.get("/:id/cabin/price");

module.exports = router;
