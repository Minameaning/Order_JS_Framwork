import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

import createOrder from './routes/createOrder.js';

dotenv.config();

const app = express();
app.use(express.json());


const port = process.env.PORT || 3000;

const connString = process.env.MONGO_URI;


if (!connString) {
    console.error('MONGO_URI is not defined in environment variables.');
    process.exit(1); 
}


async function main() {
    try {
        await mongoose.connect(connString, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('Connected to MongoDB');
    } catch (err) {
        console.error('Error connecting to MongoDB:', err);
    }
}

async function connectToDB() {
    try {
        await mongoose.connect(connString);
        console.log('Connected to MongoDB Atlas');
    } catch (err) {
        console.error('MongoDB connection error:', err);
    }
}
connectToDB();

main();



app.use('/api/orders', createOrder);



app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
}).on('error', (err) => {
    console.error('Error starting server:', err);
});