const discord = require("discord.js")
exports.run = async(client,message,args) => {
const embed = new discord.MessageEmbed()
.setColor(`BLUE`)
.setAuthor(`${message.author.username} Tarafından istendi`,message.author.avatarURL({dynamic: true}))
.setTitle(`Guard yardım menüsü`)
.addFields(
    {name:`> .ban-koruma`,value: `Ban Korumasını Aktif Eder.`},
    {name:`> .spam `,value:`Spam Korumasını Aktif Eder.`},
    {name:`> .self-koruma`,value:`Self Botları Susturur`},
    {name:`> .anti-raid`,value:`Bot Korumasını Aktif Eder.`},
    {name:`> .reklamengel `,value:`Reklam Korumasını Aktif Eder.`},
    {name:`> .reklamlog `,value:`Reklam Yapınca Mesajı Siler Kanal'a Atar.`},
    {name:`> .küfür-engelle`,value:`Küfür Korumasını Aktif Eder.`}
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
    name: "guard"
}