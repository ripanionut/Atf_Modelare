const mongoose = require("mongoose");
const Portfolio = mongoose.model("Portfolio");

exports.getPortfolio = async (req, res) => {
  const portfolios = await Portfolio.find({});
  return res.json(portfolios);
};

exports.getPortfolioById = async (req, res) => {
  try {
    const portfolio = await Portfolio.findById(req.params.id);
    return res.json(portfolio);
  } catch (error) {
    return res.status(442).json(error.message);
  }
};
exports.createPortfolio = async (req, res) => {
  const portfolioData = req.body;
  console.log(portfolioData);
  //const userId = 'google-oauth2|102786300019029413723';
  // to do extract
  //portfolio.userId = userId;
  const portfolio = new Portfolio(portfolioData);
  try {
    const newPortfolio = await portfolio.save();
    return res.json(newPortfolio);
  } catch (error) {
    return res.status(422).json(error.message);
  }
};

exports.updatePortfolio = async (req, res) => {
  const {
    body,
    params: { id },
  } = req;

  try {
    const updatePortfolio = await Portfolio.findOneAndUpdate({ _id: id }, body, {
      new: true, runValidators:true
    });
    return res.json(updatePortfolio);
  } catch (error) {
    return res.status(422).json(error.message);
  }
};

exports.deletePortfolio = async (req, res) => {
  const portfolio = await Portfolio.findOneAndRemove({_id: req.params.id})
  return res.json({_id: portfolio.id})
}