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
  
  if (message.content === "Ping"){
    var embed = new Discord.RichEmbed()
    .setTitle("Uh Oh?")
    .setDescription("[lol1](https://cdn.discordapp.com/attachments/519581022124507189/533835650407858186/Doge_PREMIUM.png) \n [Lol2](https://cdn.discordapp.com/attachments/519581022124507189/533835650407858188/unknown-4.png) \n [Lol3](https://cdn.discordapp.com/attachments/519581022124507189/533835650932408332/Screenshot_2019-01-06-11-25-49-1.png)")
                    
                    
    
   
    
    .addField("Ping!", ":ping_pong: Pong!")
    .setTimestamp()
    .setColor("GREEN")
    .setFooter(message.author.username);
    message.channel.send(embed)
  }
  //if (cmd === `${prefix}help`){
});

bot.login(process.env.token);
