import StockDB from "../model";
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
}
