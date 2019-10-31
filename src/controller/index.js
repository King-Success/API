import StockDB from "../model";
import UserStockDB from "../model/userStocks";

/**
 * Houses the controller methods
 */
export default class IndexController {
  /**
   *
   * @param {object} req
   * @param {object} res
   */
  static getAll(req, res) {
    return res.status(200).json({
      data: StockDB,
      status: "success"
    });
  }

  /**
   *
   * @param {object} req
   * @param {object} res
   */
  static myStock(req, res) {
    const { userId } = req.params;
    const stocks = UserStockDB[userId];
    if (!stocks) return res.status(200).json({ status: "success", data: [] });
    return res.status(200).json({
      status: "success",
      data: stocks
    });
  }
}
