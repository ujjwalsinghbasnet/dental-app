const axios = require('axios');
const Appointment = require('../models/appointment');

const paymentWithKhalti = async (req,res) => {
    const { token, amount, product_identity } = req.body
    console.log({token,amount})
    let data = {
        "token": token,
        "amount": amount
    };
    
    let config = {
        headers: {'Authorization': 'Key test_secret_key_bbf1d49d1d6d4b3fa2f1b2ded163177f'}
    };
    
    axios.post("https://khalti.com/api/v2/payment/verify/", data, config)
        .then(response => {
            if(response.data.status===200){
                console.log('running')
                Appointment.findByIdAndUpdate(product_identity, { payment: 'verified' }, { runValidators: true })
            }
            res.json(response.data);
        })
        .catch(error => {
            res.json({msg: error});
        });
}
module.exports = paymentWithKhalti