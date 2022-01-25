const discord = require("discord.js")
exports.run = async(client,message,args) => {
const embed = new discord.MessageEmbed()
.setColor(`BLUE`)
.setAuthor(`${message.author.username} Tarafından istendi`,message.author.avatarURL({dynamic: true}))
.setTitle(`Botlist yardım menüsü`)
.addFields(
    {name:`> .başvuru-gidecek-kanal-ayarla`,value: `Başvuruların Gideceği Kanal`},
    {name:`> .başvuru-log-ayarla`,value:`Bot Onaylandı / Reddedildi Log Kanalı.`},
    {name:`> .botlist-yetkili-rol-ayarla`,value:`Botları Onaylayacak Yetkili Rol.`},
    {name:`> .botreddet <BotID> <SahipID> <Sebep>`,value:`Botu Reddedersiniz.`},
    {name:`> .botonayla <BotID> <SahipID>`,value:`Botu Onaylarsınız.`}
    )
.setFooter(`Kayez`,client.user.avatarURL({dynamic:true}))
.setTimestamp()
.setImage(`https://cdn.discordapp.com/attachments/934726012099498005/935202364233756733/standard.gif`)
return message.channel.send(embed)
}
exports.conf = {
    aliases:[]
}
exports.help = {
    name: "botlist"
}