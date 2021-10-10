const stripe = Stripe(process.env.END_POINT_SECRET);
export {
    getPaymentIntent,
    createProduct,
    createCheckoutSession,
    createPrice
};
const getPaymentIntent = async (req,res,next) => {
    try {
        const id = req.params.id;
        const paymentIntent = await stripe.paymentIntents.create({
            amount:2000,
            currency:'eur',
            payment_method_types: ['card'],
        })
        res.send(paymentIntent);
    } catch( error) {
        res.status(400).send(error.message);
    }
};

const createCheckoutSession = async(req,res,next) => {
    try{
        console.log("price id :" + req.query.id);
        const session = await stripe.checkout.sessions.create({

            shipping_address_collection: {
                allowed_countries: ['FR'],
              },
            line_items: [
            {
                price: req.query.id,
                quantity: 1
                // quantity: req.query.quantity,
            },
            ],
            payment_method_types: [
            'card',
            ],
            mode: 'payment',
            successURL: "http://localhost:8081/checkoutsuccess/"+this.$route.params.id,
            cancelURL: 'http://localhost:8081/products/'+this.$route.params.id,
        })
        res.send(session);
        res.redirect(303, session.url)
    }catch(error){
        res.status(400).send(error.message)
    }

};

const createProduct = async(req,res,next) => {
    try{
        const product = await stripe.products.create({
            name: req.query.name,
            description:req.query.description,
            images:[req.query.image]
        });
        res.send(product);
    } catch(error) {
        res.status(400).send(error.message)
    }

};

const createPrice = async(req,res,next) => {
    try {
        const price = await stripe.prices.create({
            product: req.query.id,
            unit_amount: req.query.price,
            currency: 'eur',
        });
        res.send(price);
    }catch(error){
        res.status(400).send(error.message)
    }

};