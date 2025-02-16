const { MessageEmbed, MessageButton, MessageActionRow } = require('discord.js');

module.exports = {
  name: 'about',
  category: 'Information',
  aliases: ['botinfo'],
  description: 'See description about this project',
  args: false,
  usage: '',
  userPrams: [],
  botPrams: ['EMBED_LINKS'],
  owner: false,
  execute: async (message, args, client, prefix) => {
    const row = new MessageActionRow().addComponents(
      new MessageButton().setLabel('server Discord').setStyle('LINK').setURL(client.config.links.invite),
      new MessageButton()
        .setLabel('discord')
        .setStyle('LINK')
        .setURL('https://discord.gg/aDbC9rfqBs'),
      new MessageButton().setLabel('Support').setStyle('LINK').setURL(client.config.links.support),
    );
    const mainPage = new MessageEmbed()
      .setAuthor({
        name: 'Queen Rose ',
        iconURL:
          'https://media.discordapp.net/attachments/966675680907657256/966675755453018133/20220411_160253.png',
      })
      .setThumbnail(
        'https://media.discordapp.net/attachments/966675680907657256/966675755453018133/20220411_160253.png',
      )
      .setColor('#303236')
      .addFields([
        { name: 'Queen' , value: '[Queen Rose](https://discord.gg/aDbC9rfqBs), [q.u.e.e]https://discord.gg/aDbC9rfqBs) and [Rose](https://discord.gg/aDbC9rfqBs)', inline: false },
        { name: 'Queen' , value: '[Family](https://discord.gg/aDbC9rfqBs)' , inline: false },
        { name: 'Queen', value: '[Queen](https://discord.gg/aDbC9rfqBs)' , inline: false },
        { name: '\u200b' , value: `[family](https://discord.gg/aDbC9rfqBs) is [Queen](https://discord.gg/aDbC9rfqBs)'s  enjoy using Queen Rose !` }
      ])
    return message.reply({ embeds: [mainPage], components: [row] });
  },
};