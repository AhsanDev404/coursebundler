import express from "express";
import courseRoute from "./src/routes/CourseRoute.js";
import userRoute from "./src/routes/userRoute.js";
const app = express();


app.use('/api', courseRoute)
app.use('/api', userRoute)

export default app;
