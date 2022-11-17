const express = require("express");
const router = express.Router();
const {
  signup,
  singin,
  signout,
  requireSignin,
  forgotPassword,
  resetPassword,
} = require("../controllers/auth");

// validators
const { runValidation } = require("../validators");
const {
  userSignupValidator,
  userSigninValidator,
  resetPasswordValidator,
  forgotPasswordValidator,
} = require("../validators/auth");

router.post("/signup", userSignupValidator, runValidation, signup);
router.post("/signin", userSigninValidator, runValidation, singin);
router.get("/signout", signout);
router.put("/forgot-password", forgotPasswordValidator, runValidation, forgotPassword);
router.put("/reset-password", resetPasswordValidator, runValidation, resetPassword);

// test
// router.get("/secret", requireSignin, (req, res) => {
//   res.json({
//     message: req.user,
//   });
// });

module.exports = router;
