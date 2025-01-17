const express = require("express");
const mongoose = require("mongoose");
const fileUpload = require("express-fileupload");
const dotenv = require("dotenv");
dotenv.config();
const cors = require("cors");
const app = express();
const authRoutes = require("./Routes/authRoutes.js");
const userPreferenceRoutes = require("./Routes/userPreferenceRoutes.js");

app.use(cors());
app.use(
  fileUpload({
    useTempFiles: true,
  })
);
app.use(express.json());

const cookieParser = require("cookie-parser");

app.use(cookieParser());

app.use("/api", require("./Routes/contentUploadRoute"));
dotenv.config();

app.use("/api/auth", authRoutes);
app.use("/api/userPreference", userPreferenceRoutes);
app.use("/api", require("./Routes/lmsRoutes"));
app.use("/api", require("./Routes/categoryRoute"));

app.listen(process.env.PORT || 4000, async () => {
  console.log("connected to port" + process.env.PORT);
  try {
    await mongoose.connect(process.env.MONG_URI);
    console.log("connected to mongodb");
  } catch (error) {
    console.log(error.message);
  }
});
