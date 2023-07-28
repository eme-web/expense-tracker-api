const mongoose = require('mongoose')

const db = async () =>{
    try{
        mongoose.set('strictQuery', false)
        await mongoose.connect(process.env.MONGO_URI)
        console.log('Db connected');
    } catch (error) {
        console.log('Db connection error');
    }
}

module.exports = {db}