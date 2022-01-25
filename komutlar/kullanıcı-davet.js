const Discord = require('discord.js');

exports.run = (client, message) => {
  
  const davet = new Discord.MessageEmbed()
  .setColor('#f6ff00')
  .setThumbnail('https://media.discordapp.net/attachments/720029424216440923/735255651638313061/727894683061321759.gif')
  .setDescription(`** Bot Davet Linki Ve Destek Sunucusu;**

**[Bot Davet](https://discord.com/oauth2/authorize?client_id=934133750382600283&scope=bot&permissions=8)**
**[Destek Sunucusu](https://discord.gg/NAJmpaG3kw)** 



`)
  message.channel.send(davet)
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["davet", "davet-et", "bot-davet" ],
  permLevel: 0
}
exports.help = {
  name: "davet"
}