const port = process.env.DATABASE_PORT | 27017;
module.exports = {
    port,
    url: "mongodb://mongo:" + port
};