const express = require("express");
const config = require("./src/configs/config");
const db = require("./src/configs/db");
// const personRoutes = require("./src/routes/personRoutes");

const authRoutes = require("./src/routes/authRoute");

const app = express();
app.use(express.json());

db.connect();

// app.use("/api/v1", personRoutes);
app.use("/api/v1/auth", authRoutes);

const server = app.listen(config.PORT, () =>{
    console.log(`Server is running on port http://localhost:${config.PORT}`);
});
