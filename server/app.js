import express from "express";
import courseRoute from "./src/routes/CourseRoute.js";
import userRoute from "./src/routes/userRoute.js";
import ErrorMiddleware from "./src/middlewares/Error.js";
const app = express();


app.use('/api', courseRoute)
app.use('/api', userRoute)

app.use(ErrorMiddleware)

export default app;
