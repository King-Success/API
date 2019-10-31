import jwt from "jsonwebtoken";

const secret = "secret";
const checkToken = req => {
  const {
    headers: { authorization }
  } = req;
  let bearerToken = null;
  if (authorization) {
    bearerToken = authorization.split(" ")[1]
      ? authorization.split(" ")[1]
      : authorization;
  }
  return bearerToken;
};

export const verifyUser = (req, res, next) => {
  const token = checkToken(req);
  if (!token)
    res
      .status(401)
      .json({ status: "error", message: "Please provide a token" });
  try {
    const decode = jwt.verify(token, secret);
    req.decoded = decode;
    next();
  } catch (e) {
    res.status(401).json({ status: "error", message: "Unauthorised" });
  }
};
