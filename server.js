const express= require('express');
const mongoose= require('mongoose');

const app = express();

const port=9000;
const url= "mongodb+srv://saffar:test123@cluster0.g0edpcp.mongodb.net/?retryWrites=true&w=majority";

mongoose.connect(url,{useNewUrlParser: true});
const con= mongoose.connection;
app.use(express.json());
try{
    con.on('open',() => {
        console.log('connected');
    })
}catch(error)
{
    console.log("Error: "+error);
}

const productrouter= require("./routes/product");
const orderrouter= require("./routes/order");

app.use('/products',productrouter)
app.use('/orders',orderrouter)

const hostname = '192.168.1.91';

app.listen(port, hostname, () => {
});