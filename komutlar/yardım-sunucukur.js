const discord = require("discord.js")
exports.run = async(client,message,args) => {
const embed = new discord.MessageEmbed()
.setColor(`BLUE`)
.setAuthor(`${message.author.username} Tarafından istendi`,message.author.avatarURL({dynamic: true}))
.setTitle(`Sunucu Kur yardım menüsü`)
.addFields(
    {name:`> .sunucu-kur-oyun`,value: `Oyun Temalı Sunucu Kurar.`},
    {name:`> .sunucu-kur-j4j`,value:`J4J Temalı Sunucu Kurar.`},
    {name:`> .sunucu-kur-invite=ödül`,value:`Ödül Temalı Sunucu Kurar`},
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
    name: "sunucukur"
}