const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    
    let HelpEmbed = new Discord.RichEmbed()
    .setDescription("Help")
    .setColor("#15f153")
    .addField('All of the commands with %\nhelp for help\nserverinfo for server info\nbotinfo fo bot info\nreport {user} {reason} for report a user\ntempmute for mute\nAdmins: \nkick {user} for kick user\nban {user} ban user from the server');
    

    message.channel.send(HelpEmbed);



}
module.exports.help = {
    name: "help"
  }