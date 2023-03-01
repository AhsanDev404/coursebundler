import app from "./app.js";
import mongoose from "mongoose";

mongoose
  .connect(
    "mongodb+srv://AhsanDev404:ahsan9889@coursebundler.rtgsqux.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log(`Database Connected`);
  });

app.listen(4000, () => {
  console.log(`Server is running on port 4000`);
});
