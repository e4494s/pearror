const Discord = require('discord.js');
const client = new Discord.Client();

const prefix = '~';

client.once('ready', () => {
	console.log('Pearror is ready!');
});

client.on('message', message => {
	if (message.author.bot) return;
	if (!message.content.startsWith(prefix)) return;
	console.log(message.content);
	if (message.content === '~ping') {
		message.channel.send(`Pong, ${message.member.username}!`);
	}
});

client.login(process.env.BOT_TOKEN);
