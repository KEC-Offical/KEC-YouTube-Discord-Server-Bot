// This code is for the folder where your commands are. Please do not use this code in your main file..
const moment = require('moment')
require('moment-duration-format');
const os = require('os');
const Discord = require('discord.js')

exports.run = (client, message, args) => {
message.delete();
let user = message.author
message.channel.send(`CHANNEL_MESSAGE`)
user.send("USER_DM_MESSAGE")
}
exports.conf = {
    aliases: []
};

exports.help = {
    name: 'reedem-<CODE>', // Please replace <Code> with a custom code. (Example: KEC-E4M7-3NY5)
};
