// This code is for the folder where your commands are. Please do not use this code in your main file..
const moment = require('moment')
require('moment-duration-format');
const os = require('os');
const Discord = require('discord.js')

exports.run = (client, message, args) => {
    const dizi = []
        client.guilds.cache.find((item, i) => {
            dizi.push(item.memberCount)
        })
        var toplam = 0
        for (var i = 0; i < dizi.length; i++) {
            if (isNaN(dizi[i])) {
                continue;
            }

            toplam += Number(dizi[i])
        }
        const uptime = moment.duration(client.uptime).format("D [Day], H [Hour], m [Minutues], s [Secon]")

        const statistics = new Discord.MessageEmbed()
            .setTitle('Statistics')
            .setThumbnail(client.user.displayAvatarURL({ size: 1024 }))
            .addField('User', toplam, true)
            .addField('Server', client.guilds.cache.size, true)
            .addField('Channel', client.channels.cache.size, true)
            .addField('Working Time', uptime, true)
            .addField('Node.JS Version', process.version, true)
            .addField('Ram Usage', (process.memoryUsage().heapUsed / 1024 / 1024).toFixed(0), true)
            .addField('CPU', `\`\`\`${os.cpus().map(i => i.model)[0]}\`\`\``)
            .addField('Bit', os.arch(), true)
            .addField('System', os.platform(), true)

        message.channel.send(statistics)
};

exports.conf = {
    aliases: ["s"]
};

exports.help = {
    name: 'statistics',
    description: 'Statistics command',
    usage: 'statistics'
};
