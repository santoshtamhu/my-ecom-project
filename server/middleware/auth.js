const jwt = require("jsonwebtoken");
const { SELLER } = require("../constants/role");

function checkAuthentication(req, res, next) {
  let token = req.headers.authorization?.replaceAll("Bearer ", "");

  if (token) {
    try {
      const decodedUser = jwt.verify(token, "yourSecretSignature");

      req.user = decodedUser;
      return next();
    } catch (err) {
      /*  if there is error in jwt token from client..
          let leave it as it is and our below code will handle.
      */
    }
  }
  return res.status(401).send({
    msg: "unauthenticated",
  });
}

const isSeller = (req, res, next) => {
  if (req.user.role === SELLER) {
    return next();
  }
  res.status(403).send({
    msg: "only for sellers",
  });
};

module.exports = {
  checkAuthentication,
  isSeller,
};
