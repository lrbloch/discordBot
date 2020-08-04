const Discord = require('discord.js');
const client = new Discord.Client();
const auth = require('./auth.json');
const emojiTranslate = require('node-emoji');   //NEW (npm -i --save node-emoji)

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
    if (msg.content === 'ping') {
        msg.reply('pong');
    }
});

client.on('messageReactionAdd', (messageReaction, user) => {
    var emoji = messageReaction.emoji;
    console.log(emojiTranslate.which(emoji.name));  //NEW
});

client.login(auth.token);