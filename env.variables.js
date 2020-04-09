const dotEnv = require('dotenv');


const env = dotEnv.config().parsed;

module.exports = {
    ...env,
    variables: Object.keys(env).reduce((prev, next) => {
        prev[`process.env.${next}`] = JSON.stringify(env[next]);
        return prev;
    }, {})
};