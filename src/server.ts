import app from "./app";
import dotenv from "dotenv";
import connectToDb from "./db/config";
dotenv.config();
connectToDb();
const port = process.env.PORT
app.listen((port), () => {
    console.log(`Server is listening on port ${port}`)
})
