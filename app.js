const Discord = require("discord.js");
const client = new Discord.Client();
const auth = require('./auth.json');
var prefix = "!";

client.on("ready", () => {
  console.log("Ready...");
  client.user.setGame(auth.game);
});

client.on("guildMemberAdd", member => {
  let channel = client.channels.get(auth.channel);
  channel.send("<@"+member.user.id+"> " + auth.newMessage);
});

client.on("message", (message) => {
  let command = message.content.toLowerCase().split(" ")[0];
  command = command.slice(prefix.length);
  if(command === auth.command) {
    let arg = message.content.split(" ");
    let name = arg[1] + " " + arg[2];
    message.member.setNickname(name).catch(console.error);
    let role = message.guild.roles.find("name", auth.role);
    message.member.addRole(role).catch(console.error);
    message.channel.send(message.author + " " + auth.replyMessage);
  }
});

client.login(auth.token);
