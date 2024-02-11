const router = require("express").Router();
const authServices = require("../services/authServices");
const { isGuest, isAuth } = require("../middleware/authMiddleware");
const { AUTH_COOKIE_NAME } = require("../constants");
const { log } = require("util");

router.get("/login", isGuest, (req, res) => {
  res.render("auth/login");
});

router.post("/login", isGuest, async (req, res) => {
  const { email, password, description } = req.body;
  try {
    let token = await authServices.login({
      email,
      password,
    
    });
    res.cookie(AUTH_COOKIE_NAME, token);
    res.redirect("/");
  } catch (error) {
    res.render("auth/login", { error: error.message });
  }
});

router.get("/register", isGuest, (req, res) => {
  res.render("auth/register");
});

router.post("/register", isGuest, async (req, res) => {
  const { email, password, description, rePass } = req.body;
console.log(req.body);
  if (password !== rePass) {
    res.locals.error = "Passwords do not match!";
    return res.render("auth/register");
  }

  try {
    await authServices.register({
      email,
      password,
      description,
    });

    let token = await authServices.login({
      email,
      password,
   
    });
    res.cookie(AUTH_COOKIE_NAME, token);
    res.redirect("/");
  } catch (error) {
    res.render("auth/register", { error: getErrorMessage(error) });
  }
});

function getErrorMessage(error) {
  console.log(error);

  if (error.name == "MongoServerError") {
    let usernameError = error.keyValue.username;
    let emailError = error.keyValue.email;
    return usernameError || emailError
      ? "Username or email is already taken!"
      : error.message;
    // return error.message.split("{")[1].split(" ")[2] + " is already taken!";
  }
  let errorsArr = Object.keys(error.errors);

  if (errorsArr.length > 0) {
    return error.errors[errorsArr[0]];
  } else {
    return error.message;
  }
}

router.get("/logout", isAuth, (req, res) => {
  res.clearCookie(AUTH_COOKIE_NAME);
  res.redirect("/");
});

module.exports = router;
