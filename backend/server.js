const conversationRoute = require('./routes/conversationRoutes');
const messageRoute = require('./routes/messageRoutes');
const cors = require('cors');

////// to be deleted from chat branch
const userRoute = require('./routes/users');



const express = require('express');
const app = express();

const connectDB = require('./config/db');
// const messageRoute = require('./routes/messageRoutes');


// Connect Database
connectDB();


//middleware
app.use(express.json());
app.use(cors());


const port = process.env.PORT || 8082;

app.use("/conversations", conversationRoute);
app.use("/messages", messageRoute);

////////// to be deleted from chat branch
app.use("/users" ,userRoute);



app.listen(port, () => console.log(`Server running on port ${port}`));