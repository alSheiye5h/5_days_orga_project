const midlleHome = async (req, res, next) => {
  // try {
  //   const { id } = req.cookies;
  //   if (!id) {
  //     res.status(200).redirect("/");
  //     return;
  //   }
  //   next();
  //   return;
  // } catch (err) {
  //   res.status(200).redirect("/");
  //   return;
  // }
  next();
};

module.exports = midlleHome;
