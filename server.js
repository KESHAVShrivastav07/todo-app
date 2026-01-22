const express = require('express');
const app = express();

//load environment variables
require('dotenv').config();
const PORT = process.env.PORT || 4000;
//database connection

const dbConnect = require('./config/database');
dbConnect;
//middleware to parse JSON requests
app.use(express.json());
//import routes
const todoRoutes = require('./routes/todo');
//use routes
app.use('/api/v1', todoRoutes);

// //start the server
// app.listen(PORT, () => {
//     console.log(`Server is running on port ${PORT}`);
// });

//connect to the database
const dbConnection = require('./config/database');
dbConnection;

//default route
app.get('/', (req, res) => {
    res.send('Welcome to the Todo API');
}
);
//health check route
app.get('/health', (req, res) => {
    res.status(200).send('OK');
}
);
//handle 404 errors
app.use((req, res) => {
    res.status(404).json({ message: 'Route not found' });
}
);
//error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: 'Internal server error' });
}
);
//start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
}
);
