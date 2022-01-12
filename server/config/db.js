const mongoose = require("mongoose");

const connectDB = async() =>{
    try {
        const conn = await mongoose.connect(process.env.mongo_atlas_url,
            {   
                useNewUrlParser:true,
                useUnifiedTopology:true,
                // useFindAndModify: false
            })
            //  mongoose.set("useCreateIndex",true);
console.log(`MongoDB connected: ${conn.connection.host}`);

    } catch (error) {
        console.log(error);
        process.exit(1);
    }
}

module.exports = connectDB;