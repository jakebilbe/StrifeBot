# Strife Bot
is a Discord Bot designed for FFXIV Discord Servers to notify new users that join your server to change their Discord Server nickname to their FFXIV Character Name.

## Setup
Use your preferred method of obtaining this repository, open the folder in whichever Terminal application you prefer and run **npm install** to install the dependencies.

You will find a file named **cpy_auth.json**, rename this to **auth.json** and edit the file to your own liking.

* **Bot Token** - Your generated Bot Token [HERE](https://discordapp.com/developers/applications/me)
* **Region Code** - This is either *en, na or jp* depending on what region your Free Company is associated with
* **Channel** - This must be the ID of the Channel *(Settings > Appearance > Developer Mode | Right Click Channel > Copy ID)*
* **Advanced Mode** - If set to False it requires `!name First Second` but if set to True then it generates an **MD5** Code and Direct Messages the User with instructions to Verify through Lodestone
* **Debug Mode** - Due to the nature of the bot, there are bound to be some bugs/issues so if you are having these please enable this and contact me with a screenshot of your console
* **Default Role** - This must be the text name of the Role *(e.g. Member, Recruit, Veteran)* which will be given to any Verified users that aren't in **Roles to Give**
* **Roles to Give** - An array of Keys:Values *(Character Name:Role)* that you can set to give certain users set roles, if you do not wish to use this feature close the brackets *(e.g. "rolesToGive": {})*

**PLEASE NOTE THAT THIS WILL NOT WORK FOR ANY ROLES HIGHER THAN THE BOT**

##### Required Permissions
* Manage Roles
* Manage Nicknames
* Send Messages

## Built With
* [Discord.js](https://www.npmjs.com/package/discord.js) - *discord.js is a powerful node.js module that allows you to interact with the Discord API very easily.*
* [Request](https://www.npmjs.com/package/request) - *Request is designed to be the simplest way possible to make http calls.*
* [Cheerio](https://www.npmjs.com/package/cheerio) - *Cheerio parses markup and provides an API for traversing/manipulating the resulting data structure.*
* [MD5](https://www.npmjs.com/package/md5) - *a JavaScript function for hashing messages with MD5.*
