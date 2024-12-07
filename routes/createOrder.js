import express from 'express';

// Import Orders model (Mongoose model defined in models/Orders.js)
import Orders from '../models/Orders.js';


const router = express.Router();


router.post('/', async (req, res) => {
    try {
        console.log(req.body)
        const { order_id, user_id, order_value, created_at, store_id, vertical, type } = req.body;


        const newOrder = new Orders({
            order_id: order_id,
            user_id: user_id,
            order_value: order_value,
            created_at: created_at,
            store_id: store_id,
            vertical: vertical,
            type: type
        });


        const createdOrder = await newOrder.save();


        res.status(200).json(createdOrder);
    } catch (error) {
        res.status(401).json({ message: error.message });
    }
});

export default router;