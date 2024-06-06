const express = require('express'); // Import the 'express' module
const connectDB = require('./db.js');
const app = express();
const itemModel = require('./models/item.js');

const cors = require('cors');

app.use(express.json());    
app.use(cors());

const client = connectDB();

app.get('/', async (req, res) => {
    const collection = client.db("test").collection("devices");
    const document = await collection.findOne({});
    res.json(document);
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});