// import mongoose from "mongoose";
// let isConnected = false;

// export const connectToDB = async () => {
//     mongoose.set("strictQuery", true);
//     if (isConnected) {
//         console.log("Already connected to DB");
//         return;
//     }
//     try {
//         await mongoose.connect('mongodb+srv://dmadhusudhan98:Dmadhusudhan@123@cluster0.du5j4tb.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', {
//             dbName: "review",
//             useNewUrlParser: true,
//             useUnifiedTopology: true,
//         });
//         isConnected = true;
//         console.log("Connected to DB");
//     } catch (error) {
//         console.log("Error connecting to DB", error);
//     }
// }


import mongoose from "mongoose";

let isConnected = false;

export const connectToDB = async () => {
    if (isConnected) {
        console.log("Using existing database connection");
        return;
    }

    try {
        const db = await mongoose.connect('mongodb+srv://dmadhusudhan98:Dmadhusudhan123@cluster0.du5j4tb.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', {
            dbName: "Review",
        });

        isConnected = db.connections[0].readyState === 1;
        console.log("New database connection established");
    } catch (error) {
        console.error("Error connecting to database:", error.message);
        throw error; // Rethrow the error so it can be caught in the API route
    }
};