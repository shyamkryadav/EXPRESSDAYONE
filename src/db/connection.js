const mongoose=require('mongoose');
const connection= async ()=>{
    const isConnected = await mongoose.connect('mongodb://127.0.0.1:27017/test');
    if(isConnected){
        console.log("dataBase is connected ");
    }else{
        console.log("dataBase is not connected");

    }
}
module.exports = connection;
