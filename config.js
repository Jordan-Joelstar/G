//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.miles = "2349054039891"
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "jordanjoelstar@gmail.com";
global.location = "Lagos,Nigeria.";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/Jordan-joelstar/Miles";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaCamn3BKfi29OjdbG2P";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaCamn3BKfi29OjdbG2P";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/9fd51255a5206e4f51ea8.jpg";
global.devs = "2349054039891";
global.sudo = process.env.SUDO || "2349054039891,2349043487099,2347061138624,2348026593544,2348101445162,64204918166";
global.owner = process.env.OWNER_NUMBER || "2349054039891,2349043487099,2347061138624,2348026593544,2348101445162,64204918166";
global.style = process.env.STYLE || "2";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "true";
global.userImages = process.env.USER_IMAGES || "https://telegra.ph/file/c466bb543ed5c9e9ac266.jpg,https://telegra.ph/file/c68c818865cf951cd3eb6.jpg,https://telegra.ph/file/fecc95023b6d81869fa98.jpg,https://telegra.ph/file/419bfb466f53542ce44af.pnghttps://telegra.ph/file/c9cbe0536a7559decf340.jpg,https://telegra.ph/file/d87c04468ddb04a8bcd13.jpg,https://telegra.ph/file/b4cd6e385b28d74b5d377.jpg,https://telegra.ph/file/4381f296bd9f90b92c7a9.jpg,https://telegra.ph/file/758c35dc699be1de4547e.jpg,https://telegra.ph/file/c6ac7937495379f5dd182.png,https://telegra.ph/file/9691aaa5f941e968d2e34.png,https://telegra.ph/file/90e774b053934dc8c6191.png,https://telegra.ph/file/d93c5b0c39f489aba8be7.jpg,https://telegra.ph/file/86771451573d5e1bd7765.png,https://telegra.ph/file/aa72fdeb3514687646e61.jpg,https://telegra.ph/file/56d3b5984c9793f5a942c.jpg,https://telegra.ph/file/9514021ab4ba7c07a8f9a.jpg,https://telegra.ph/file/f20ac594fd59bba9d1bae.jpg,https://telegra.ph/file/c8d8cb7fa20e788a82eb2.jpg,https://telegra.ph/file/e3c0abedef1ceebc053c9.jpg,https://telegra.ph/file/91673772f28c82fe1ee5f.jpg,https://telegra.ph/file/ac1c668c76cea4e917899.jpg,https://telegra.ph/file/ec6d1fde75503f8e8bd09.jpg,https://telegra.ph/file/2ddcad74965bdc3511d33.jpg,https://telegra.ph/file/1bc88a1474a14fec78dca.jpg,https://telegra.ph/file/8c139aca1b7ecc95c1933.jpg,https://telegra.ph/file/cf26bbf2c7b20be8fdcd0.jpg,https://telegra.ph/file/e98c723cf422dddafa7a6.jpg,https://telegra.ph/file/0d7bc31385f65875f30eb.jpg,https://telegra.ph/file/f4532f1fb609c8703e6ae.jpg,https://telegra.ph/file/01d03d5b563efad3ae6f6.jpg,https://telegra.ph/file/f0f0c6d54e299ceca29c4.jpg,https://telegra.ph/file/2edf36f5f71d715dc55f4.jpg,https://telegra.ph/file/c393ba39734b2a4c2678b.jpg,https://telegra.ph/file/7f2d00e678bb15d78170c.jpg,https://telegra.ph/file/273a528ec62c72a318c5f.jpg,https://telegra.ph/file/c7f88eb5076c5360d431c.jpg,https://telegra.ph/file/f3a1f4ff71bdb230f3542.jpg,https://telegra.ph/file/ce9e583f9115d4d87f7ab.jpg,https://telegra.ph/file/75f1cc2145ebfb33ed91a.jpg,https://telegra.ph/file/3bef24d46a22a7c71f27b.jpg,https://telegra.ph/file/05b1a91574aedac4f3e45.jpg,https://telegra.ph/file/4cc1465321feb8c0ccf0c.jpg,https://telegra.ph/file/f45d6f4db5a8c8ff5457e.jpg";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "2349054039891";
global.read_status = process.env.AUTO_READ_STATUS || "false";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "2349054039891";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://miles-qr.onrender.com";

global.SESSION_ID =
  process.env.SESSION_ID ||
  ""
module.exports = {
  menu: process.env.MENU || "1",
  HANDLERS: process.env.PREFIX || "/",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "©🅹🄾🆁🅳🄰🄽-🅹🄾🅴🄻🅂🅃🄰🆁",
  author: process.env.PACK_AUTHER || "ᴀsᴛᴀ ᴍᴅ",
  packname: process.env.PACK_NAME || "🅼︎🅸🄻🅴🅂",
  botname: process.env.BOT_NAME || "🅼︎🅸🄻🅴🅂",
  ownername: process.env.OWNER_NAME || "𝙹𝙾𝚁𝙳𝙰𝙽-𝙹𝙾𝙴𝙻★",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "chat.whatsapp.com,https://whatsapp.com/channel,https://t.me,https://slnkz.com,https://azcoiner.com,https://mobile.over.network,https://shibaai.club/signup,https://link.kelp.finance,https://emerson,https://tr.ee/Child-Support-Fund-Portal",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "ASTA").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
