const moment = require("moment");

// Middleware - Logger
const logger = (req, res, next) => {
    console.log(
        `${req.protocol}://${req.get("host")}${req.originalUrl} : ${moment()
            .format("Do MMMM YYYY, h:mm:ss a")}`
    );
    next();
};

module.exports = logger;
