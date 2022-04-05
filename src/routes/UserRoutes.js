const Router = require("express").Router;
const {register, login, profile} = require("../controllers/UserController");
const TokenValidator =  require("../middleware/TokenValidator");

const route = Router();

route.post("/register", register);
route.post("/login", login);
route.post("/profile", TokenValidator, profile);

module.exports = route;
