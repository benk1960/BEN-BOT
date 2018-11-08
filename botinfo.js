const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    let bitcon = bot.user.displayAvatarURL;
        let botembed = new Discord.RichEmbed()
        .setDescription('Bot Information')
        .setColor('#00ff15')
        .setThumbnail(bitcon)
        .addField('Bot Name', bot.user.username)
        .addField('Bot On', bot.user.createdAt);


        message.channel.send(botembed);

}

module.exports.help = {
  name: "botinfo"
}