const Discord = require('discord.js');
const Canvas = require('canvas');
//test
const client = new Discord.Client();

const prefix = '~';

client.once('ready', () => {
        client.channels.get('754200846530641960').send('*I am alive...*');
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
		if (cmd.length == 1 || typeof(Number(cmd[1])) !== 'number') { message.channel.send('Please input a number of sides.'); return; }
		else if (cmd.length > 2) { message.channel.send('Please input only one value.'); return; }
		else message.channel.send(Math.ceil(Math.random() * Number(message.content.replace('~dice ', ''))));
	}
	else if (cmd[0] == '~test') {
                message.channel.send('Success!');
		/*let canvas = document.createElement('canvas');
		let ctx = canvas.getContext('2d');
		canvas.style = 'width:50px;height:50px;background-color:pink';
		ctx.fillRect(10, 10, 10, 10);
		let attachment = new Discord.MessageAttachment(canvas.toBuffer(),'square.png');
		 message.channel.send('There should be a black square on a pink background (if i did this right)', {files: [attachment]});*/
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
