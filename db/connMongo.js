import mongoose from "mongoose";

const connMongoDB = async () => {
    try{
        await mongoose.connect(process.env.MONGO_CON_URL)
        console.log("mongoDB connect :)");
    } catch (err) {
        console.log({
            "error" : "mongodb connection problem :(",
            "msg": err
        });
    }
}

export default connMongoDB;