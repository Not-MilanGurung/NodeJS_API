const express = require("express");
const config = require("./src/configs/config");
const db = require("./src/configs/db");
const personRoutes = require("./src/routes/personRoutes");

const app = express();
app.use(express.json());

db.connect();

app.use("/api/v1", personRoutes);

const server = app.listen(config.PORT, () =>{
    console.log(`Server is running on port http://localhost:${config.PORT}`);
});



process.on('SIGTERM', () => {
  console.log('\tSIGTERM signal received.');
  server.close(async () => {
    console.log('Closed out remaining connections');
    await db.disconnect();
    process.exit(0);
  });
});

process.on('SIGINT', () => {
  console.log('\tSIGINT signal received.');
  server.close( async () => {
    console.log('Closed out remaining connections');
    await db.disconnect();
    process.exit(0);
  });
});