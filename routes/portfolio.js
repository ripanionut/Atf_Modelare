const express = require("express");
const router = express.Router();
const {
  getPortfolio,
  getPortfolioById,
  createPortfolio,
  updatePortfolio,
  deletePortfolio,
} = require("../controllers/portfolio");

//const { checkJwt } = require("../controllers/auth");

router.get("", getPortfolio);
router.get("/:id", getPortfolioById);

router.post("", createPortfolio);

router.patch("/:id", updatePortfolio);
router.delete('/:id', deletePortfolio)
module.exports = router;
