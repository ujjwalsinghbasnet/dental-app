const axios = require("axios");
const Appointment = require("../models/appointment");

const paymentWithKhalti = async (req, res) => {
  const { token, amount, product_identity } = req.body;

  let data = {
    token: token,
    amount: amount,
  };

  let config = {
    headers: {
      Authorization: "Key test_secret_key_f862705d919f4838a069c708e537f992",
    },
  };

  axios
    .post("https://khalti.com/api/v2/payment/verify/", data, config)
    .then((response) => {
      if (response.status === 200) {
        Appointment.findByIdAndUpdate(
          product_identity,
          { payment: "verified" },
          { runValidators: true }
        ).then((updated) => {
          console.log({ updated });
        });
      }
      res.json(response.data);
    })
    .catch((error) => {
      res.json({ msg: error });
    });
};
module.exports = paymentWithKhalti;
