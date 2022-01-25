const discord = require("discord.js")
exports.run = async(client,message,args) => {
const embed = new discord.MessageEmbed()
.setColor(`BLUE`)
.setAuthor(`${message.author.username} Tarafından istendi`,message.author.avatarURL({dynamic: true}))
.setTitle(`Genel yardım menüsü`)
.addFields(
    {name:`> .kayıt`,value: `Kayıt Komutları görüntülersiniz`},
    {name:`> .seviye`,value:`Seviye Komutları görüntülersiniz`},
    {name:`> .moderasyon`,value:`Yetkili Komutları görüntülersiniz`},
    {name:`> .coin-yardım`,value:`Coin Yardım Menusu`},
    {name:`> .botlist`,value:`Botlist Komutları görüntülersiniz`},
    {name:`> .gif`,value:`Gif Komutları görüntülersiniz`},
    {name:`> .kullanıcı`,value:`Kullanıcı Komutları görüntülersiniz`},
    {name:`> .sunucukur`,value:`Hazır Sunucu Komutları görüntülersiniz`},
    {name:`> .guard`,value:`Guard Komutları görüntülersiniz`},
    {name:`> .abone`,value:`Abone Rol Komutları görüntülersiniz`}
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
    name: "yardım"
}