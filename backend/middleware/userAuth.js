const User = require("../model/userModel");
const jwt = require("jsonwebtoken");

exports.isAuthenticated = async (req, res, next) => {
  const { token } = req.cookies;

  if (!token) {
    return res.status(401).json({
      error: "Please Login To Access This Resource",
    });
  }

  const decodeToken = jwt.verify(token, process.env.JWT_SECRET);
  try {
    req.user = await User.findById(decodeToken.id);
    next();
  } catch (error) {
    return res.status(401).json({
      error: "Some Problem in Cookies",
    });
  }
};

exports.authorizeRoles = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      return res.status(403).json({
        error: "Your Are Not Admin",
      });
    }
    next();
  };
};
