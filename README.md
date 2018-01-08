# Strife Bot
is a Discord Bot designed for FFXIV Discord Servers to notify new users that join your server to change their Discord Server nickname to their FFXIV Character Name.

## Setup
Use your preferred method of obtaining this repository, open the folder in whichever Terminal application you prefer and run **npm install** to install the dependencies.

You will find a file named **cpy_auth.json**, rename this to **auth.json** and edit the file to your own liking.

* **Bot Token** - You can Generate a Bot Token [HERE](https://discordapp.com/developers/applications/me)
* **Channel** - This must be the ID of the Channel you wish the Bot to listen to for new users
* **Role** - Please use the Name of the Role, not an ID
* **Advanced Mode** - If set to False it requires `!name First Second` but if set to True then it generates an **MD5** Code and Direct Messages the User with instructions to Verify through Lodestone

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
