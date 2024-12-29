const router = require("express").Router();

/*
    bghit ndir login w lmiddlewares ... wlkn glt blech deja 3andi les exams ... donc mkin lach nbka nzid n9adi lwa9t, 
    machi ndeye3 lwe9t wlkn n9dih hit mkanhech bzf ani kndy3o kter mkanchouf rassi knconsommih w sf
*/

// const login = require("../controllers/front/login");
// const home = require("../controllers/front/home");
// const middleHome = require("../middleware/home");
// const middle = require("../middleware/log_reg");

// router.route("/").get(middle, login);
// router.route("/home").get(middleHome, home);
router.get("/", (req, res) => {
  res.status(200).render("index");
});

module.exports = router;
