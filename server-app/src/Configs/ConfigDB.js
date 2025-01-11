const mongoose = require("mongoose");

async function configureDB(app, PORT) {
  try {
    const CONNECTION_URL = process.env.CONNECTION_URL;
    const connection = await mongoose.connect(CONNECTION_URL);
    console.log("Connection Established with MongoDB Atlas");
    app.listen(PORT, () => {
      console.log(`HTTP server is listening at ${PORT}...`);
    });
  } catch (error) {
    console.error(error);
    process.exit(0);
  }
}

module.exports.configureDB = configureDB;
