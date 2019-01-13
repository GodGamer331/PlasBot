const Discord = require("discord.js");
const bot = new Discord.Client({disableEveryone: true});
const fs = require("fs");
const prefix = "!";

bot.on("ready", async () => {
  console.log(`${bot.user.username} is online with prefix P>!`);
  
  bot.user.setActivity("!help for start", {type: "WATCHING"});
});

bot.on("message", async message => {

  if (message.author.bot) return;
  
  if (cmd === `{prefix}ping`){
    var embed = new Discord.RichEmbed()
    .setTitle("Oh?")
    .addField("Ping!", ":ping_pong: Pong!")
    .setTimestamp()
    .setFooter(message.author.username);
    message.channel.send(embed)
  }
  
});

bot.login(process.env.token)
