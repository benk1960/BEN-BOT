const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    let sion = message.guild.displayAvatarURL;
    let serverembed = new Discord.RichEmbed()
    .setDescription("Server Info")
    .setColor('#00ff15')
    .setThumbnail(sion)
    .addField("Server Name ", message.guild.name)
    .addField('Created On ', message.guild.createdAt)
    .addField('You Joined ', message.member.joinedAt)
    .addField("Total  Members ", message.guild.memberCount);

    message.channel.send(serverembed);
}

module.exports.help = {
  name: "serverinfo"
}