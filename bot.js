const Discord = require('discord.js');
const client = new Discord.Client();

const prefix = '~';

client.once('ready', () => {
	console.log('Pearror is ready!');
        /*client.user.setPresence({
          status: 'online',
          game: {
            name: 'Using ~help',
            type: 'LISTENING'
          }
        });*/
        bot.user.setActivity(`this won't appear in the bot's custom status!`, {type: 4});
});

client.on('message', message => {
	if (message.author.bot) return;
	if (!message.content.startsWith(prefix)) return;
	console.log(message.content);
	if (message.content === '~ping') {
		message.channel.send(`Pong, ${message.member.user.username}! \`${Date.now() - message.createdTimestamp}ms\``);
	}
        else if (message.content.startsWith('~echo')) {
                message.channel.send(message.content.replace('~echo ', ''));
        }
});

client.login(process.env.BOT_TOKEN);
