import express from "express";
import cors from "cors";
import router  from "./routes/user"
import "./config/passport"
import passport from "passport";
import roleRouter from "./routes/role"
import "./db/config"
import feedbackRouter from "./routes/feedback";
import campRouter from "./routes/camp";

console.log("role router loaded");

const app = express()
app.use(express.json())
app.use(passport.initialize());
app.use(cors())

app.use("/api/v1", router)
app.use("/api/v1", roleRouter)
app.use("/api/v1", feedbackRouter)
app.use("/api/v1", campRouter)




export default app;