import KhaltiCheckout from 'khalti-checkout-web'
import fetchServices from '../../features/services';

const config = {
    publicKey: 'test_public_key_4ba198b2d93d4a22821917babd948520',
    productIdentity: '1234567890',
    productName: 'appointment',
    productUrl: 'http://localhost:3000/appointment',
    eventHandler: {
        onSuccess(payload){
            //initiate verification
            console.log(payload)
            fetchServices.verifyPayment(payload)
        },
        onError(error){
            //handle error
            console.log(error)
        },
        onClose(){
            //closed payment widget
        }
    },
    "paymentPreference": ["KHALTI", "EBANKING","MOBILE_BANKING", "CONNECT_IPS", "SCT"]
};

const checkout = new KhaltiCheckout(config)


export default checkout