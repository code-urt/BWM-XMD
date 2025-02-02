const fs = require('fs-extra');
const { Sequelize } = require('sequelize');
if (fs.existsSync('config.env'))
    require('dotenv').config({ path: __dirname + '/config.env' });
const path = require("path");
const databasePath = path.join(__dirname, './database.db');
const DATABASE_URL = process.env.DATABASE_URL === undefined
    ? databasePath
    : process.env.DATABASE_URL;
module.exports = { session: process.env.SESSION_ID || 'BWM-XMD;;;H4sIAAAAAAAAA5VU226rOBT9F782PYFAgESqNAnX3DkJSRtGo5EBAw5320CSKv8+Im3VPsw503mzfFl7ea+11yvIC0zRAl3A+BWUBDeQoW7JLiUCYzCtwxAR0AMBZBCMwWaeWiiKT3uTE2CV8sKOoueD4/F2RQ9ZzCsqMtu5u2XZ5AnceqCsvRT7vwF8iYbJyKDb5rLJzO1AXU3me6yvJa8Y7paBpBzYUgoGA7I/+0/g1iFCTHAe6WWMMkRgukAXG2LyPfqDBT6wkhZ4YnFLlmp6ZjdVbPP9gX9Q1yrEa3vbnBpkp8n36MvpVhsWmSqyAZyaZ1Fq45GZWbHvDdzGjNxRyfvPle9n0+iNPsVRjoJZgHKG2eXbfVet3cnKIE8ugcxi1Z3Zq59Lptmb1ueYWpFZ5e/8sOVqgfsecaMclpFyzu1jMJGOLkub6+SKlqo37UeGM+g7HHT1/kuTRNxX4jb58Eryf/qurInjybqfJ4Xlqfi0JpTh5RIPFs2Z+vt0RrX05FhBzUXfo1+LBPPRUGn0PQ3p8aLlz1rluAwnsU5n+BgLLhX4Q2Mlyid9yGryO5bbSjM0By9H1/S4XKrTIkbC1ZJQWxhpf4P7C7GZPrCD4tdNrB85f67xnD9KtsMdQ1ltXFViS/u1s5ZzQxSy1VyQyuQUPd1/lKDLLABj/tYDBEWYMgIZLvJub8CLPQCDZod8gti9vWBz1WTqVfO1MW+5XbTcbw7PK22pc4V1TadpKGR9NzmFofmgPIEeKEnhI0pRYGHKCnJZIUphhCgY//lXD+TozN6E68oJfA+EmFC2z+syLWDwoerHIfT9os7Z7pL7ardABIy5z23EGM4j2vWxziHxY9wgNYaMgnEIU4puPRCgBvuowwP7yyzjRna7bc1wkhwbVXr8+xR1lOMif7siKdIQ8R58hKEoP4oiFB9HHC8/8sJQkT3Zl4PREPQAfp+Z7s2vfaFGkuMejGpreoODe6q3J3JimUt29C7DW+8RQQEYM1KjHvCgn9SlUyQo/w3u6qisXpiROaVe2ia3WlChL4nWxlS5L7hvmoLx62dOqUXQ4UkHyZk61gT0QHa3IO5+PpAEmReFAadw3Fji/qA/2q6RsCx/5IiBHshhdxtsWIxIV+Zdgw4gQAzilHbZsMqbfBSp+tzU+qQ1Te0YTdSoq/Wh2Yf538wVPVenNuObsPKmq+WMu7RZf/9c9Y2HSMMxVn4u1+nOsam6a5/+BaRDeCh0I3EzIzWviJvO3EX4U3zZqOvRMDEscWMeB2tpGPqEP8bPM01PTn2ojc5LW9GOqzILybXaW+J8E0anySzPSzhKdLV96qq9eedrMQwn5Wix2GcJP3tJcvlcG15WLiLZhfXsLBJzGl/8Zp6vhTlOG8GytrM23HKBegk8YUqF5thu9Bc1QZNsllkLudikXPQ+lvdYSN/jGN8H5vXdaSFG93R71+A/tfo0PXfrfcF4z8tfGGt6NKpCmTNPkLLWUS/rFZ03vFE157CYiMWx0dWru0+u8iSh4Hb7qwfKFLKwIBkYA5p5EPRACimbfA6tgzNEGcxKMOZlQRlykjQUb/8Ay9rEZuoHAAA=',
    PREFIXE: process.env.PREFIX || ".",
    OWNER_NAME: process.env.OWNER_NAME || "Ibrahim Adams",
    NUMERO_OWNER : process.env.NUMERO_OWNER || " Ibrahim Adams",              
    AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "yes",
    AUTO_DOWNLOAD_STATUS: process.env.AUTO_DOWNLOAD_STATUS || 'no',
    BOT : process.env.BOT_NAME || 'BMW_MD',
    URL : process.env.BOT_MENU_LINKS || 'https://files.catbox.moe/h2ydge.jpg',
    MODE: process.env.PUBLIC_MODE || "yes",
    PM_PERMIT: process.env.PM_PERMIT || 'yes',
    HEROKU_APP_NAME : process.env.HEROKU_APP_NAME,
    HEROKU_APY_KEY : process.env.HEROKU_APY_KEY ,
    WARN_COUNT : process.env.WARN_COUNT || '3' ,
    ETAT : process.env.PRESENCE || '',
    CHATBOT : process.env.PM_CHATBOT || 'no',
    DP : process.env.STARTING_BOT_MESSAGE || "yes",
    ANTIDELETE1 : process.env.ANTIDELETE1 || 'yes',
    ANTIDELETE2 : process.env.ANTIDELETE2 || 'yes',
    MENUTYPE : process.env.MENUTYPE || '',
    ANTICALL : process.env.ANTICALL || 'yes',
                  AUTO_REACT : process.env.AUTO_REACT || 'yes',
                  AUTO_REACT_STATUS : process.env.AUTO_REACT_STATUS || 'yes',
                  AUTO_REPLY : process.env.AUTO_REPLY || 'yes',
                  AUTO_READ : process.env.AUTO_READ || 'yes',
                  AUTO_SAVE_CONTACTS : process.env.AUTO_SAVE_CONTACTS || 'yes',
                  AUTO_REJECT_CALL : process.env.AUTO_REJECT_CALL || 'yes',
                  AUTO_BIO : process.env.AUTO_BIO || 'yes',
                  AUDIO_REPLY : process.env.AUDIO_REPLY || 'yes',
    DATABASE_URL,
    DATABASE: DATABASE_URL === databasePath
        ? "postgresql://postgres:bKlIqoOUWFIHOAhKxRWQtGfKfhGKgmRX@viaduct.proxy.rlwy.net:47738/railway" : "postgresql://postgres:bKlIqoOUWFIHOAhKxRWQtGfKfhGKgmRX@viaduct.proxy.rlwy.net:47738/railway",
   
};
let fichier = require.resolve(__filename);
fs.watchFile(fichier, () => {
    fs.unwatchFile(fichier);
    console.log(`mise à jour ${__filename}`);
    delete require.cache[fichier];
    require(fichier);
});

