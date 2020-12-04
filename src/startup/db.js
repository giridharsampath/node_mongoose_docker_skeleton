const config = require("config");
const mongoose = require("mongoose");

const db = config.get("db");
const port = config.has("port") ? config.get("port") : 8443;
// const port = process.env.PORT;

module.exports = async (app) => {
  try {
    await mongoose.connect(db, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    });
    mongoose.set("useUnifiedTopology", true);
    logger.debug("MONGODB connected...");
    logger.debug(db);
    app.listen(port, () => {
      logger.debug(`Listening on Port ${port}`);
    });
    return;
  } catch (err) {
    logger.error(err.message);
    process.exit(1);
  }
};
