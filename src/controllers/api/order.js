const Order = require("../../model/order");

const order = async (req, res) => {
  // console.log("hit");
  const { type, phone, address, code, message } = req.body;

  try {
    const newOrder = await Order.create({
      type,
      phone,
      address,
      code,
      message,
    });

    return res.status(201).json(newOrder);
  } catch (error) {
    if (error.name === "ValidationError") {
      const validationErrors = Object.keys(error.errors);

      for (const field of validationErrors) {
        if (field === "type") {
          return res
            .status(333)
            .json({ field: "type", error: "Invalid or missing type" });
        }
        if (field === "phone") {
          return res
            .status(335)
            .json({ field: "phone", error: "Invalid or missing phone" });
        }
        if (field === "address") {
          return res
            .status(334)
            .json({ field: "address", error: "Invalid or missing address" });
        }
        if (field === "code") {
          return res
            .status(336)
            .json({ field: "code", error: "Invalid or missing code" });
        }
        if (field === "message") {
          return res
            .status(337)
            .json({ field: "message", error: "Invalid or missing message" });
        }
      }
    }

    return res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = order;
