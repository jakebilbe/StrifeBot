# Strife Bot
is a Discord Bot designed for FFXIV Discord Servers to notify new users that join your server to use the command you have specified to change their Discord Server nickname to their FFXIV Character Name. Upon calling the command they are automatically assigned a Role.

## Setup
Use your preferred method of obtaining this repository, open the folder in whichever Terminal application you prefer and run **npm install** to install the dependencies.

You will find a file named **cpy_auth.json**, rename this to **auth.json** and edit the file to your own liking. I've made it so that everything can be changed and even altered for a completely different game if needed with support for the following:

* **Bot Token** - This is your own Bot Token, required to log the bot in.
* **Game** - Whatever Game you want the Bot to be displayed as playing.
* **Command** - In the Example below this is set to **name** *(!name)*
* **Channel** - The Channel the bot listens to for new users **MUST BE CHANNEL ID**
* **Role** - The Bot can assign a Role you set **MUST BE THE ROLE NAME**
* **Welcome Message** - What ever you want to say to the new user.
* **Thank You Message** - What ever you want replied back to the user after setting their name.

### Example

![PreviewImage](https://i.imgur.com/RH844zc.png)
