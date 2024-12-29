const midlle = async (req, res, next) => {
  // try {
  //   const { id } = req.cookies;
  //   if (id) {
  //     res.status(200).redirect("/home");
  //     return;
  //   }
  //   next();

  //   return;
  // } catch (err) {
  //   next();

  //   return;
  // }
  next();
};

module.exports = midlle;
