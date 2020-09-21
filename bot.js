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
	if (message.content == '~help') {
		message.channel.send('``ping`: Return bot latency\n`~echo`: Copy what you say');
	}
	else if (message.content === '~ping') {
		message.channel.send(`Pong, ${message.member.user.username}! \`${Date.now() - message.createdTimestamp}ms\``);
	}
  	else if (message.content.startsWith('~echo')) {
    	message.channel.send(message.content.replace('~echo', ''));
    }
});

client.login(process.env.BOT_TOKEN);
