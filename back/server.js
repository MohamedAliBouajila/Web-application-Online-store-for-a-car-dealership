// const http = require('http')
// const hostname = '127.0.0.1'
// const port = 3000
// const server = http.createServer((req,res)=>{
//     res.statusCode = 200
//     res.setHeader('Content-Type','text/plan')
//     res.end('Hello World\n')
// })

// server.listen(port,hostname,()=>{
//     console.log(`Server running at http://${hostname}:${port}/`)
// })

var express = require("express")
var cors = require("cors")
const path = require('path')
const cookieParser = require("cookie-parser");

const {success,error} = require("consola")

var app = express()
const port = 3000
const DB = require("./config/database");


app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
    );
    res.setHeader(
      "Access-Control-Allow-Methods",
      "GET, POST, PUT, DELETE, PATCH, OPTIONS"
    );
    next();
  });
  
const userRoute = require("./Routes/userRoute");
const voitureRoute = require("./Routes/voitureRoute");
const commandeRoute = require("./Routes/commandeRoute");


bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/user",  userRoute);

app.use("/voiture",voitureRoute);

app.use("/commande", commandeRoute);



app.use(express.json());

app.use(cors());

app.use(express.static('public'));
app.use('/storages', express.static(path.join(__dirname, 'storages')));

app.listen(port,async ()=>{

     try {
        success({
            message: `sucess to connect to server via port:${port}`,
            badge: true,
        })
        
     } catch (error) {
        error({
            message: "error",
            badge: true,
        })
     }

})
