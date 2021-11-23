const express = require("express");
const {
  userRegistration,
  userLogin,
  userLogout,
  getUserDetails,
  getSingleUser,
} = require("../controllers/userController");
const { isAuthenticated, authorizeRoles } = require("../middleware/userAuth");
const router = express.Router();

router.post("/signup", userRegistration);
router.post("/login", userLogin);
router.get("/logout", userLogout);

router.get("/me", isAuthenticated, getUserDetails);

// ADMIN
router
  .route("/user/:id")
  .get(isAuthenticated, authorizeRoles("admin"), getSingleUser);

module.exports = router;
