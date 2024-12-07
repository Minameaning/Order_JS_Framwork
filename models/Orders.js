import mongoose from "mongoose";

const ordersSchema = new mongoose.Schema({
    order_id: {	
        type: String, 
        required: [true, 'Order ID is required'], 
        unique: true 
    },
    user_id: {
        type: String, 
        required: [true, 'User ID is required']
    },
    order_value: {
        type: Number, 
        required: [true, 'Order value is required'], 
        min: [0, 'Order value must be a positive number']
    },
    created_at: {
        type: Date, 
        required: true, 
        default: Date.now
    },
    store_id: {
        type: String, 
        required: [true, 'Store ID is required']
    },
    vertical: {
        type: String, 
        required: [true, 'Vertical is required'],
        enum: ['Pharmacy', 'CPGs', 'Whim', 'Others'] 
    },
    type: {
        type: String, 
        required: [true, 'Order type is required'],
        enum: ['Now', 'Scheduled']  
    }
});

const Orders = mongoose.model('Orders', ordersSchema);

export default Orders;