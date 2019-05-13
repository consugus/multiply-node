const options = {
    base: {
        demand: true,
        alias: "b"
    },
    limit: {
        demand: false,
        alias: "l",
        default: 1
    }
};

const argv = require("yargs")
    .command("create"," Generates a file with multiplying table, according to base and limit", options)
    .command("list", "Prints in console multiplying table, according to base and limit", options)
    .help()
    .argv;


module.exports = {
    argv
};