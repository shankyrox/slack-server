// config.js
const dotenv = require('dotenv');
dotenv.config();
module.exports.env = {
    client_secret : process.env.CLIENT_SECRET,
    client_id: process.env.CLIENT_ID,
    verification_token: process.env.VERIFICATION_TOKEN,
    bot_token: process.env.BOT_TOKEN
};