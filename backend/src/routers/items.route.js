const express = require("express");

const router = express.Router();

const itemControllers = require("../controllers/itemControllers");

router.get("/", itemControllers.browse);
router.get("/:id", itemControllers.read);
router.put("/:id", itemControllers.edit);
router.post("/", itemControllers.add);
router.delete("/:id", itemControllers.destroy);

module.exports = router;
