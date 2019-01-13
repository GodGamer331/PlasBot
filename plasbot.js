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
  
  let prefix = "p!"
  let messageArray = message.content.split(" ")
  let cmd = messageArray[0]
  let args = messageArray.slice(1)
  let mods = message.guild.roles.find("name", "#~Moderator~#");
  
  if (message.content === "Ping"){
    var embed = new Discord.RichEmbed()
    .setTitle("Uh Oh?")
    .setAuthor("Support Server, Preparing", "https://cdn0.iconfinder.com/data/icons/free-social-media-set/24/discord-512.png")
    .addField("Ping!", ":ping_pong: Pong!")
    .setTimestamp()
    .setColor("GREEN")
    .setFooter(message.author.username);
    message.channel.send(embed)
  }
  if (cmd === `${prefix}help`){
    var embed = new Discord.RichEmbed()
    .setTitle("Help commands!", `${message.author.avatarURL}`)
    .addField("Without Prefix:", "[here are all commands without prefix]")
    .addField("Ping", "Shows bots Ping and our server invite.")
    .addField("With Prefix:", "[here are all commands with prefix]")
    .addField("p!help", "Shows this command")
    .setColor("BLUE")
    .setFooter("Message sent it:")
    .setTimestamp();
    message.channel.send(embed)
  }
});

bot.login(process.env.token);
