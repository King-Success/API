import UserDB from "../model/users";
import uuid from "uuid/v1";
/**
 * Houses the controller methods
 */
export default class UserController {
  /**
   *
   * @param {object} req
   * @param {object} res
   */
  static register(req, res) {
    const { name, email, password } = req.body;
    const userExist = UserDB.find(
      user => user.email === email && user.password === password
    );
    if (userExist)
      return res
        .status(400)
        .json({ statu: "error", message: "user already exist" });
    const newUser = {
      id: uuid(),
      name,
      email,
      password
    };
    UserDB.push(newUser);
    return res.status(200).json({
      data: [newUser],
      status: "success"
    });
  }
  /**
   *
   * @param {object} req
   * @param {object} res
   */
  static login(req, res) {
    const { email, password } = req.body;
    const userExist = UserDB.find(
      user => user.email === email && user.password === password
    );
    if (userExist) {
      delete userExist.password;
      return res.status(200).json({
        data: [userExist],
        status: "success"
      });
    }
    return res.status(200).json({
      error: "",
      status: "fail"
    });
  }
}
