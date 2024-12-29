const router = require("express").Router();

/*
    kent baghi ndir login w lmiddlewares ... wlkn glt blech deja kano les exams ... donc mkin lach nbka nzid n9adi lwa9t, 
    machi ndeye3 lwe9t wlkn n9dih hit mkanhech bzf ani kndy3o kter mkanchouf rassi knconsommih w sf
*/

// const { register } = require("../controllers/api/register");
// const { login } = require("../controllers/api/login");
const order = require("../controllers/api/order");
// const middleHome = require("../middleware/home");
// const middle = require("../middleware/log_reg");

// router.route("/register").post(middle, register);
// router.route("/login").post(middle, login);
router.route("/order").post(order);

module.exports = router;
