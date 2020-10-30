const Discord = require('discord.js');
//const Canvas = require('canvas');

const client = new Discord.Client();

const prefix = '~';

let nouns = [
	'ball',
	'cow',
	'chicken',
	'duck',
	'horse',
	'house',
	'President',
	'gun',
	'bomb',
	'treasure chest',
	'egg',
	'box',
	'cookie',
	'pillow',
	'orange',
	'apple',
	'pear',
	'banana',
	'chair',
	'mountain',
	'brick',
	'trampoline',
	'planet'
];

let transitive_verbs = [
	{present: 'eat', past: 'ate', participle: 'eating'},
	{present: 'murder', past: 'murdered', participle: 'murdering'},
	{present: 'capture', past: 'captured', participle: 'capturing'},
	{present: 'file', past: 'filed', participle: 'filing'},
	{present: 'evade', past: 'evaded', participle: 'evading'},
	{present: 'attack', past: 'attacked', participle: 'attacking'},
	{present: 'shoot', past: 'shot', participle: 'shooting'},
	{present: 'burn', past: 'burned', participle: 'burning'},
	{present: 'toast', past: 'toasted', participle: 'toasting'},
	{present: 'insult', past: 'insulted', participle: 'insulting'},
	{present: 'hack', past: 'hacked', participle: 'hacking'},
	{present: 'cyberbully', past: 'cyberbullied', participle: 'cyberbullying'}
];
let intransitive_verbs = [
	{present: 'run', past: 'ran', participle: 'running'},
	{present: 'swim', past: 'swam', participle: 'swimming'},
	{present: 'hide', past: 'hid', participle: 'hiding'},
];

let adjectives = [
	'tasty',
	'ugly',
	'beautiful',
	'red',
	'orange',
	'yellow',
	'green',
	'blue',
	'purple',
	'smooth',
	'bumpy',
	'sour',
	'flat',
	'strong'
];

let adverbs = [
	
];

function getNoun() {
	let randIndex = Math.floor(Math.random() * nouns.length);
	return nouns[randIndex];
}
function getVerb(transitive) {
	if (transitive) let randIndex = Math.floor(Math.random() * transitive_verbs.length);
	else let randIndex = Math.floor(Math.random() * intransitive_verbs.length);
	return verbs[randIndex];
}
function getAdjective() {
	let randIndex = Math.floor(Math.random() * adjectives.length);
	return adjectives[randIndex];
}

function makeSentence() {
	return `There once was a ${getAdjective()} ${getNoun()} who liked ${getVerb(false).participle} while ${getVerb(true).participle} ${getNoun()}s.`;
}

//
//
//
//
//

client.once('ready', () => {
        client.channels.get('754200846530641960').send('`Changes successfully loaded.` *I am alive...*');
});

client.on('message', message => {
        if (message.content.toLowerCase().includes('pear') || message.content.toLowerCase().includes('🍐')) message.react('🍐');
        if (message.author.bot) return;
	if (!message.content.startsWith(prefix)) return;
	let cmd = message.content.split(' ');
	if (cmd[0] == '~help') {
		message.channel.send('`~ping`: Return bot latency\n`' +
				     '`~echo`: Copy what you say\n' +
				     '`~dice `__`n`__: Roll an __n__ sided dice' +
				     '\n`~story`: Generate a short random story');
	}
	else if (cmd[0] === '~ping') {
		message.channel.send(`Pong, ${message.author.username}! \`${Date.now() - message.createdTimestamp}ms\``);
	}
  	else if (cmd[0] == '~echo') {
    		message.channel.send(message.content.replace('~echo', ''));
    	}
	else if (cmd[0] == '~dice') {
		if (cmd.length == 1 || typeof(Number(cmd[1])) !== 'number') { message.channel.send('Please input a number of sides.'); return; }
		else if (cmd.length > 2) { message.channel.send('Please input only one value.'); return; }
		else message.channel.send(Math.ceil(Math.random() * Number(message.content.replace('~dice ', ''))));
	}
	else if (cmd[0] == '~story') {
		message.channel.send(makeSentence());
	}
	/*else if (cmd[0] == '~testcommand') {
                let embed = new Discord.MessageEmbed().addTitle('Hopefully this will be a title');
                channel.send(embed);
	}*/
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
