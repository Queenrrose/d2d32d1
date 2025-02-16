require("dotenv").config();

module.exports = {
  token: process.env.TOKEN || '', // your discord bot token
  prefix: process.env.PREFIX || '-', // bot prefix
  ownerID: process.env.OWNERID?.split(',') || ['990100068759666758','445624020675592212'], //your discord id
  SpotifyID: process.env.SPOTIFYID || '83c98500a89a4a5eae6fa819643644b8', // spotify client id
  SpotifySecret: process.env.SPOTIFYSECRET || 'b2627d1bf6c846d98e102fe58e656892', // spotify client secret
  mongourl: process.env.MONGO_URI || 'mongodb+srv://pee33:wnn99e@cluster0.fgivnid.mongodb.net/?retryWrites=true&w=majority', // MongoDb URL
  embedColor: process.env.COlOR || '#3366ff', // embed colour
  logs: process.env.LOGS || '', // Discord channel id 
  links: {
    support: process.env.SUPPORT || 'https://discord.gg/aDbC9rfqBs',
    invite: process.env.INVITE || 'https://discord.gg/aDbC9rfqBs',
    vote: process.env.VOTE || 'https://discord.gg/aDbC9rfqBs',
    bg: process.env.BG || 'https://media.discordapp.net/attachments/966675680907657256/967789748699668480/flat-landscape-lake-sunset-deer-wallpaper-preview.jpg'
  },

  nodes: [
    {
      url: process.env.NODE_URL || 'lava-v3.ajieblogs.eu.org:80',
      name: process.env.NODE_NAME || 'Main',
      auth: process.env.NODE_AUTH || 'https://dsc.gg/ajidevserver',
      secure: parseBoolean(process.env.NODE_SECURE || 'false'),
    },
          {
      url: process.env.NODE_URL || 'lava-v3.ajieblogs.eu.org:443',
      name: process.env.NODE_NAME || 'Main',
      auth: process.env.NODE_AUTH || 'https://dsc.gg/ajidevserver',
      secure: parseBoolean(process.env.NODE_SECURE || 'true'),
    },
          {
      url: process.env.NODE_URL || 'lava-all.ajieblogs.eu.org:443',
      name: process.env.NODE_NAME || 'Main',
      auth: process.env.NODE_AUTH || 'https://dsc.gg/ajidevserver',
      secure: parseBoolean(process.env.NODE_SECURE || 'true'),
    },
          {
      url: process.env.NODE_URL || 'lava-all.ajieblogs.eu.org:80',
      name: process.env.NODE_NAME || 'Main',
      auth: process.env.NODE_AUTH || 'https://dsc.gg/ajidevserver',
      secure: parseBoolean(process.env.NODE_SECURE || 'false'),
    },
  ],
};

function parseBoolean(value){
    if (typeof(value) === 'string'){
        value = value.trim().toLowerCase();
    }
    switch(value){
        case true:
        case "true":
            return true;
        default:
            return false;
    }
}
