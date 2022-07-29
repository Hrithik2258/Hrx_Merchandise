import {loadStripe} from '@stripe/stripe-js';

let stripePromise;
const getStripe = () => {
    if (!stripePromise){
         stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);
        // stripePromise = loadStripe(process.pk_test_51LIPTmSFNa2ll23lSvzc0838N1RvlJOygwrKwVq0NafaSzeE5kBASrcqnKRme4NysAMQ1b9WVgAgkCaGjGourFEn002FQkYx1Q);
    }

    return stripePromise;
}
export default getStripe;