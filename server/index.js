import express from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

// users endpoint
app.get('/users', (req, res) => {
    res.json({
        data: 'Lucca Joao Mei'
    })
});

const port = process.env.port || 8000;

// Defining port
app.listen(port, () => {
    console.log(`Node server is running on port ${port}`)
});

