const {connect} = require('mongoose');
const {error, success} = require("consola");
const DB = "mongodb://localhost:27017/stage";
const connectDB = async ()=>{
    try {
        await connect(DB);
        success({
            message:`success to connect to db\n${DB}`,
        })
    } catch (error) {
        console.log(error);
        connectDB();
        
    }

};

module.exports = connectDB();