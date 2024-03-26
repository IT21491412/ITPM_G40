const express = require("express");
const router = express.Router();
const {
  setTranslaterHistory,
  getTranslaterHistory,
  getOneTranslaterHistory,
  updateTranslaterHistory,
  deleteOneTranslationHistory,
  deleteAllTranslationHistory,
} = require("../controllers/historyController");

const requireAuth = require("../middleware/authMiddleware");

//create history
router.post("/", requireAuth, setTranslaterHistory);

//read all history
router.get("/", requireAuth, getTranslaterHistory);

//read one part
router.get("/:itemid", requireAuth, getOneTranslaterHistory);

// update history
router.patch("/:itemid", requireAuth, updateTranslaterHistory);

//delete one translation
router.delete("/:itemid", requireAuth, deleteOneTranslationHistory);

//all delete
router.delete("/", requireAuth, deleteAllTranslationHistory);

module.exports = router;
