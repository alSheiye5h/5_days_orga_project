const User = require("../../model/user");

const login = async (req, res) => {
  const { email, pass } = req.body;
  try {
    const user = await User.findOne({
      email,
    });
    if (!user) {
      res.status(333).json({ user: "not found" });
      return;
    }
    if (user.password != pass) {
      res.status(334).json({ user: "wrong password" });
      return;
    }
    res.cookie("id", user._id);
    // res.status(200).redirect("/home");
    res.status(200).json({ redirect: "/home" });

    return;
  } catch (err) {
    console.log("login error :", err);
    res.status(500);
  }
};

module.exports = { login };
