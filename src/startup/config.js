const helmet = require("helmet");
const cors = require("cors");
const cookieParser = require("cookie-parser");

module.exports = (app) => {
  app.use(cookieParser());
  app.use(
    cors({
      origin: (origin, cb) => cb(null, true),
      credentials: true,
    })
  );
  app.use(helmet());
};
