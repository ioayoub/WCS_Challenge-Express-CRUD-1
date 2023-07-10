const express = require("express");

const router = express.Router();

const itemRoutes = require("./routers/items.route");

router.use("/api/items", itemRoutes);

module.exports = router;
