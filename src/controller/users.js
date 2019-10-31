import UserDB from "../model/users";
import jwt from "jsonwebtoken";
import uuid from "uuid/v1";

const secret = "secret";
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
    // find user
    const userExist = UserDB.find(
      user => user.email === email && user.password === password
    );
    // return user already exist error if it exists
    if (userExist)
      return res
        .status(400)
        .json({ statu: "error", message: "user already exist" });

    // create new user object
    const id = uuid();
    const newUser = {
      id,
      token: jwt.sign({ id, email }, secret, { expiresIn: "1d" }),
      name,
      email,
      password
    };
    // insert into db and return success
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
    // find user
    let userExist = UserDB.find(
      user => user.email === email && user.password === password
    );
    // return user response if it exists
    if (userExist) {
      delete userExist.password;
      userExist.token = jwt.sign({ id: userExist.id, email }, secret, {
        expiresIn: "1d"
      });
      return res.status(200).json({
        data: [userExist],
        status: "success"
      });
    }
    // return fail if it doesn't exist
    return res.status(200).json({
      error: "",
      status: "fail"
    });
  }
}
