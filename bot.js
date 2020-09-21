const Discord = require('discord.js');
const client = new Discord.Client();

const prefix = '~';

client.once('ready', () => {
	console.log('Pearror is ready!');
});

client.on('message', message => {
	if (message.author.bot) return;
	if (!message.content.startsWith(prefix)) return;
	let cmd = message.content.split(' ');
	if (cmd[0] == '~help') {
		message.channel.send('`~ping`: Return bot latency\n`~echo`: Copy what you say\n`~dice `__`n`__: Roll an __n__ sided dice');
	}
	else if (cmd[0] === '~ping') {
		message.channel.send(`Pong, ${message.member.user.username}! \`${Date.now() - message.createdTimestamp}ms\``);
	}
  	else if (cmd[0] == '~echo') {
    		message.channel.send(message.content.replace('~echo', ''));
    	}
	else if (cmd[0] == '~dice') {
		if (cmd.length == 1 || typeof Number(cmd[1]) != 'number') { message.channel.send('Please input a number of sides.'); return; }
		if (cmd.length > 2 && typeof Number(cmd[1]) == 'number') { message.channel.send('Please input only one value.'); return; }
		else message.channel.send(Math.ceil(Math.random() * Number(message.content.replace('~dice ', ''))));
	}
	/*if (message.content == '~help') {
		message.channel.send('`~ping`: Return bot latency\n`~echo`: Copy what you say\n`~dice `__`n`__: Roll an __n__ sided dice');
	}
	else if (message.content === '~ping') {
		message.channel.send(`Pong, ${message.member.user.username}! \`${Date.now() - message.createdTimestamp}ms\``);
	}
  	else if (message.content.startsWith('~echo')) {
    		message.channel.send(message.content.replace('~echo', ''));
    	}
	else if (message.content.startsWith('~dice')) {
		message.channel.send(Math.ceil(Math.random() * Number(message.content.replace('~dice ', ''))));
	}*/
});

client.login(process.env.BOT_TOKEN);
