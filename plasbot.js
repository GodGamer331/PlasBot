const Discord = require("discord.js");
const bot = new Discord.Client({disableEveryone: true});
const fs = require("fs");
const prefix = "!";

bot.on("ready", async () => {
  console.log(`${bot.user.username} is online with prefix !`);
  
  bot.user.setActivity("!help for start", {type: "WATCHING"});
});

bot.on("message", async message => {

  if (message.author.bot) return;
  
  let prefix = "!"
  let messageArray = message.content.split(" ")
  let cmd = messageArray[0]
  let args = messageArray.slice(1)
  let mods = message.guild.roles.find("name", "#~Moderator~#");
  
  if (cmd === `{prefix}ping`){
    var embed = new Discord.RichEmbed()
    .setTitle("Uh Oh?")
    .setUrl(`https://discord.gg/9rTcHkA`)
    .addField("Ping!", ":ping_pong: Pong!")
    .setTimestamp()
    .setColor("GREEN")
    .setFooter(message.author.username);
    message.channel.send(embed)
  }
  //if (cmd === `${prefix}help`){
});

bot.login(process.env.token);
