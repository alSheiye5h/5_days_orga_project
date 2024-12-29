const User = require("../../model/user");

const register = async (req, res) => {
  const { name, email, pass, repass } = req.body;
  //   console.log({ name, email, pass, repass });
  if (pass != repass) {
    res.status(321).json({ passwords: "not matching" });
    return;
  }
  try {
    const newUser = await User.create({
      name,
      email,
      password: pass,
    });
    res.status(200).json(newUser);
    console.log(newUser);
    return;
  } catch (err) {
    console.log("register error :", er);
    res.status(500);
  }
};

module.exports = { register };
