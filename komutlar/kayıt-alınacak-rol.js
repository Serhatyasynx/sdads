const discord = require('discord.js')
const db = require('wio.db');

exports.run = async(client, message, args) => {
   let karaliste = db.fetch(`ckaraliste.${message.author.id}`)
 const westraben = new discord.MessageEmbed()
 .setColor("#f6ff00")
 .setDescription(` **${karaliste}** sebebiyle karalisteye alınmışsın!\nBeyaz listeye alınmak istiyorsan [BURAYA](https://discord.com/invite/SANuqz8vNq) gelebilirsin!`)
  if(karaliste) 
    return message.channel.send(westraben)
  


  if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(` Bu komutu kullanabilmek için "\`Yönetici\`" yetkisine sahip olmalısın.`);

if(args[0] === "sıfırla") {
const sıfırlandı = new discord.MessageEmbed()
.setAuthor(client.user.username, client.user.avatarURL())  
.setTitle(`${client.user.username} | Alınacak rolü sıfırlama komutu.`)
.setColor("#f6ff00")
.setDescription(` Kayıt olunca otomatik alınacak rol sıfırlandı!`)
.setThumbnail(client.user.avatarURL())
.setFooter(`Kayez`)
message.channel.send(sıfırlandı)
db.delete(`alınacakrol_${message.guild.id}`)
return;
}

let rol = message.mentions.roles.first();   
if (!rol) {
  const ayarlanmadı = new discord.MessageEmbed()
.setAuthor(client.user.username, client.user.avatarURL())  
.setTitle(`${client.user.username} | Alınacak rolü ayarlama komutu.`)
.setColor("#f6ff00")
.setDescription(` Kayıt olunca alınacak rolü belirtiniz!`)
.setThumbnail(client.user.avatarURL())
.setFooter(`Kayez`)
message.channel.send(ayarlanmadı)
}
db.set(`alınacakrol_${message.guild.id}`, rol.id)
const ayarlandı = new discord.MessageEmbed()
.setAuthor(client.user.username, client.user.avatarURL())  
.setTitle(`${client.user.username} | Alınacak rolü ayarlama komutu.`)
.setColor("#f6ff00")
.setDescription(` Kayıt olunca otomatik alınacak rol başarıyla ${rol} olarak ayarlandı!`)
.setThumbnail(client.user.avatarURL)
.setFooter(`Kayez`)
message.channel.send(ayarlandı)
  
}
exports.conf = {
  enabled: true,
  guildonly: false,
  aliases: ['alınacakrol', 'arol', 'a-rol'],
  permlevel: 0
}
exports.help = {
  name: 'alınacak-rol',
  description: 'Kayıt Olunca Alınacak Rolü Ayarlar',
  usage: 'alınacak-rol @rol'
}