const express = require("express");
const {
  registerUser,
  loginUser,
  logout,
  getUserDetails,
} = require("../controller/UserCont");
const { isAuthenticatedUser, authorizeRoles } = require("../middleware/auth");
const router = express.Router();
router.route("/sign_up").post(registerUser);
router.route("/sign_in").post(loginUser);
router.route("/sign_out").get(logout);
router.route("/my").get(isAuthenticatedUser, getUserDetails);
module.exports = router;