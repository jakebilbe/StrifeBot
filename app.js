const Discord = require("discord.js");
const client = new Discord.Client();
var request = require('request');
var cheerio = require('cheerio');
var md5 = require('md5');
const auth = require('./auth.json');
var prefix = "!";

client.on("ready", () => {
  console.log("Waiting...");
  client.user.setGame("FINAL FANTASY XIV - A Realm Reborn");
});

client.on("guildMemberAdd", member => {
  if(auth.advancedMode) {
    let code = md5(member.user + auth.serverName);
    member.user.send({embed: {
    color: 3447003,
    description: "Strife-Bot is currently set to Advanced Mode, this means you are required to verify that the Character is yours. Please follow the steps below to verify your account, if you need help please contact an Admin on " + auth.serverName + ".",
    author: {
      name: client.user.username,
      icon_url: client.user.avatarURL
    },fields: [{
        name: "Your Verification Code",
        value: "Please edit your [Character Profile](https://eu.finalfantasyxiv.com/lodestone/my/setting/profile/) to the following Verification Code: `" + code + "`"
      },
      {
          name: "Verifying your Account",
          value: "Once you have confirmed the changes, please copy your Profile ID from the URL of your Profile Page *(e.g. lodestone/character/ProfileID/)* and then type `!verify CODE` on " + auth.serverName
      }
    ],
  }
  });
  } else {
    let channel = client.channels.get(auth.channel);
    channel.send("<@"+member.user.id+"> please set your Discord Nickname to your FFXIV Character Name with `!name Firstname Secondname` to gain access to the Member Areas.").catch(console.error);
  }
});

client.on("message", (message) => {
  if (!message.content.startsWith(prefix) || message.author.bot) return;

  if(auth.advancedMode) {
  let code = md5(message.author + auth.serverName);
    if(message.content.startsWith(prefix + "verify")) {
      let arg = message.content.split(" ");
      let profile = arg[1];

      if(auth.debugMode)
        console.log("Attempting to fetch /character/" + profile + "/");

      message.channel.send(message.author + " please wait whilst I verify your account...");
      request('https://eu.finalfantasyxiv.com/lodestone/character/' + profile + '/', function (error, response, html) {
        if (!error && response.statusCode == 200) {
          let $ = cheerio.load(html);
          let characterName = $('.frame__chara__name')[0].children[0].data;
          let bioCode = $('.character__selfintroduction')[0].children[0].data.replace(/\s+/g, '');
          let role;

          if(auth.debugMode)
            console.log(message.author.username+" has retrieved the Character: "+characterName);

          if(auth.rolesToGive[characterName] !== null) {
            role = message.guild.roles.find("name", auth.rolesToGive[characterName]);
          } else {
            role = message.guild.roles.find("name", auth.role);
          }

          if(auth.debugMode)
            console.log("Role for "+message.author.username+" is found to be "+role);

          if(bioCode.indexOf(code) !== -1) {
            if(auth.debugMode)
              console.log("Begin Nickname Change");

            message.member.setNickname(characterName).catch(console.error);

            if(auth.debugMode)
              console.log("Finish Nickname Change\r\nBegin Role Change");

            setTimeout(function() { console.log(message.author.username+" has linked their account to " + characterName); }, 250);
            message.member.addRole(role).catch(console.error);

            if(auth.debugMode)
              console.log("Finish Role Change");
          } else {
            message.channel.send(message.author + " I'm sorry but I could not verify your profile, please contact an Admin.");
          }
        } else {
          console.error(error);
        }
      });
    }
  } else {
    if(message.content.startsWith(prefix + "name")) {
      let arg = message.content.split(" ");
      let characterName = arg[1] + " " + arg[2];
      let role;

      if(auth.debugMode)
        console.log(message.author.username+" has chosen the Character: "+characterName);

      if(auth.rolesToGive[characterName] !== null) {
        role = message.guild.roles.find("name", auth.rolesToGive[characterName]);
      } else {
        role = message.guild.roles.find("name", auth.role);
      }

      if(auth.debugMode)
        console.log("Role for "+message.author.username+" is found to be "+role);

      if(auth.debugMode)
        console.log("Begin Nickname Change");

      message.member.setNickname(name).catch(console.error);

      if(auth.debugMode)
        console.log("Finish Nickname Change\r\nBegin Role Change");

      setTimeout(function() { console.log(message.author.username+" has verified their account."); }, 250);
      message.member.addRole(role).catch(console.error);

      if(auth.debugMode)
        console.log("Finish Role Change");
    }
}
});

client.login(auth.token);
