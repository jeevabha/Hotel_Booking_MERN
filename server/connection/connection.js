const { default: mongoose } = require("mongoose")

const connection = async()=>{
    try {
        await mongoose.connect(process.env.MONGO)
        console.log(`Mongodb connected ${process.env.MONGO}`);
    } catch (error) {
        console.log(error);
    }
}

module.exports =  connection