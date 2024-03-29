const Discord = require('discord.js');

const client = new Discord.Client();

const prefix = '~';

const id1 = '629837671862239247';
const id2 = '754413995317789013';

let concrete_nouns = [
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
	'planet',
	'pit',
	'cave',
        'pencil',
	'computer',
	'marble',
	'bean bag',
	'carrot'
];
let abstract_nouns = [
	'death',
	'happiness',
	'sadness',
	'hunger',
	'love',
	'evil',
	'despair',
	'anger',
	'doom',
        'fear',
	'health',
	'justice',
	'mercy',
	'mystery',
	'shame'
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
	{present: 'sleep', past: 'slept', participle: 'sleeping'},
	{present: 'die', past: 'died', participle: 'dying'},
	{present: 'cuss', past: 'cussed', participle: 'cussing'},
	{present: 'blink', past: 'blinked', participle: 'blinking'},
	{present: 'fly', past: 'flew', participle: 'flying'},
	{present: 'drive', past: 'drove', participle: 'driving'},
	{present: 'dance', past: 'danced', participle: 'dancing'},
	{present: 'skip', past: 'skipped', participle: 'skipping'},
	{present: 'bike', past: 'biked', participle: 'biking'},
	{present: 'crawl', past: 'crawled', participle: 'crawling'}
];
let travel_verbs = [
	{present: 'run', past: 'ran', participle: 'running'},
	{present: 'swim', past: 'swam', participle: 'swimming'},
	{present: 'fly', past: 'flew', participle: 'flying'},
	{present: 'drive', past: 'drove', participle: 'driving'},
	{present: 'travel', past: 'travelled', participle: 'travelling'},
	{present: 'dance', past: 'danced', participle: 'dancing'},
	{present: 'skip', past: 'skipped', participle: 'skipping'},
	{present: 'bike', past: 'biked', participle: 'biking'},
	{present: 'crawl', past: 'crawled', participle: 'crawling'}
];

let adverbs = [
	'quickly',
	'rudely',
	'violently',
	'slowly',
	'repeatedly',
	'stupidly',
	'lamely',
	'ridiculously',
	'intelligently'
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
	'strong',
        'round',
        'cubic',
        'triangular',
        'pointy',
        'long',
        'short',
	'slimy',
	'sticky',
	'wet',
	'dry'
];

let names = [
	'Bob',
	'Sam',
	'Frank',
	'Gary',
	'Edgar',
	'Chris',
	'Katie',
	'Lauren',
	'Zoey',
	'Sydney',
	'Noah',
	'Abigail',
	'Carl',
	'David',
	'Randall',
	'Jonathan',
	'Luke',
	'Emma',
	'Emily',
	'Brayden'
];
let times_of_day = [
	'day',
	'night',
	'morning',
	'afternoon',
	'evening'
];
let units_of_time = [
	'millisecond',
	'second',
	'minute',
	'day',
	'week',
	'month',
	'year'
];
let units_of_distance = [
	{singular: 'inch', plural: 'inches'},
	{singular: 'foot', plural: 'feet'},
	{singular: 'yard', plural: 'yards'},
	{singular: 'mile', plural: 'miles'},
	{singular: 'lightyear', plural: 'lightyears'}
];

function getNoun(concrete) {
	if (concrete) {
		let randIndex = Math.floor(Math.random() * concrete_nouns.length);
		return concrete_nouns[randIndex];
	}
	else {
		let randIndex = Math.floor(Math.random() * abstract_nouns.length);
		return abstract_nouns[randIndex];
	}
}
function getVerb(transitive, travel) {
	if (travel) {
		let randIndex = Math.floor(Math.random() * travel_verbs.length);
		return travel_verbs[randIndex];
	}
	else if (transitive) {
		let randIndex = Math.floor(Math.random() * transitive_verbs.length);
		return transitive_verbs[randIndex];
	}
	else {
		let randIndex = Math.floor(Math.random() * intransitive_verbs.length);
		return intransitive_verbs[randIndex];
	}
}
function getAdverb() {
	let randIndex = Math.floor(Math.random() * adverbs.length);
	return adverbs[randIndex];
}
function getAdjective() {
	let randIndex = Math.floor(Math.random() * adjectives.length);
	return adjectives[randIndex];
}
function getName() {
	let randIndex = Math.floor(Math.random() * names.length);
	return names[randIndex];
}
function getTimeOfDay() {
	let randIndex = Math.floor(Math.random() * times_of_day.length);
	return times_of_day[randIndex];
}
function getUnitOfTime() {
	let randIndex = Math.floor(Math.random() * units_of_time.length);
	return units_of_time[randIndex];
}
function getUnitOfDistance() {
	let randIndex = Math.floor(Math.random() * units_of_distance.length);
	return units_of_distance[randIndex];
}

function makeSentence() {
	let mainCharacter = getName();
	let story = '';
	story +=  `There once was a ${getAdjective()} ${getNoun(true)} named ${mainCharacter} who liked ${getVerb(false, false).participle} ${getAdverb()} `;
	story += `while ${getVerb(true, false).participle} ${getNoun(true)}s. One ${getTimeOfDay()} ${mainCharacter} decided to go on an `;
	let destination = `${titleCase(getNoun(true))} of ${titleCase(getNoun(false))}`;
	let companion = getName();
	story += `adventure with ${companion} the ${getNoun(true)}. "We must ${getVerb(false, true).present} to the ${destination}," `;
	story += `${mainCharacter} said. "It will be a ${getAdjective()} and ${getAdjective()} journey." ${Math.ceil(Math.random() * 100) + 1} `;
	story += `${getUnitOfTime()}s later, after travelling ${Math.ceil(Math.random() * 100) + 1} ${getUnitOfDistance().plural}, ${mainCharacter} `;
	story += `and ${companion} arrived at the ${destination}, feeling very ${getAdjective()}. As soon as they arrived, a ${getAdjective()} `;
	story += `${getNoun(true)} ${getVerb(true, false).past} them ${getAdverb()}.`;
	return story;
}

function titleCase(string) {
        return string[0].toUpperCase() + string.slice(1);
}






//
//
//
//
//






client.once('ready', () => {
	client.channels.cache.get("895650028780159016");
        
	client.channels.get("754200846530641960").send("`Changes successfully loaded.` *I am alive...*");
});

client.on('message', message => {
	if (message.author.bot) return;
	if (message.content.toLowerCase().includes('pear') || message.content.toLowerCase().includes('🍐')) message.react('🍐');
	if (message.content.includes('~poll')) message.react('👍').then(() => message.react('👎'));
	if (message.content.includes("this is a test")) message.channel.send("this is also a test");
	if (!message.content.startsWith(prefix)) return;
	let cmd = message.content.split(' ');
	if (cmd[0] == '~help') {
		let mbd = {
			color: 0xffff00,
			author: {
				name: 'Pearror Commands',
				icon_url: 'https://media.discordapp.net/attachments/749125883838595154/749125913412763728/Pearror404.png'
			},
			fields: [
				{
					name: '`~ping`',
					value: 'Return bot latency',
				},
				{
					name: '`~echo`',
					value: 'Copy what you say'
				},
				{
					name: '`~dice `__`n`__',
					value: 'Roll an __n__ sided die'
				},
				{
					name: '`~story`',
					value: 'Generate a random short story'
				},
				{
					name: '`~poll`',
					value: 'Add 👍 and 👎 reacts to your message'
				},
				{
					name: '`~randomcase`/`~rdmc`',
					value: 'Convert your message to rANdOm CasE'
				},
				{
					name: '`~me`',
					value: 'Return your profile'
				},
				{
					name: '`~rockpaperscissors`/`~rps`',
					value: 'Start a game of Rock Paper Scissors against Pearror (currently in development)'
				}
			]
		};
		message.channel.send({embed: mbd});
	}
	else if (cmd[0] === '~ping') {
		message.channel.send(`Pong, ${message.author.username}! \`${Date.now() - message.createdTimestamp}ms\``);
	}
  	else if (cmd[0] == '~echo') {
		let mbd = {
			description: message.content.replace('~echo', '')
		};
    		message.channel.send({embed: mbd});
    	}
	else if (cmd[0] == '~dice') {
		if (cmd.length == 1 || typeof(Number(cmd[1])) !== 'number') { message.channel.send('Please input a number of sides.'); return; }
		else if (cmd.length > 2) { message.channel.send('Please input only one value.'); return; }
		else message.channel.send(Math.ceil(Math.random() * Number(message.content.replace('~dice ', ''))));
	}
	else if (cmd[0] == '~story') {
		message.channel.send(makeSentence());
	}
	else if (cmd[0] == '~randomcase' || cmd[0] == '~rdmc') {
		let msg = message.content.replace('~randomcase', '');
		msg = msg.replace('~rdmc', '');
		let new_msg = '';
		if (msg == '') {
			message.channel.send('Please input a sentence to apply randomcase to.');
			return;
		}
		for (let i = 0; i < msg.length; i++) {
			if (Math.round(Math.random()) == 0) new_msg += msg[i].toUpperCase();
			else new_msg += msg[i].toLowerCase();
		}
		message.channel.send(new_msg);
	}
	else if (cmd[0] == '~me') {
		let auth = message.author;
		let mbd = {
			color: 0xffff00,
			author: {
				name: `${auth.username}#${auth.discriminator}`,
				icon_url: auth.avatarURL
			}
		};
		message.channel.send({embed: mbd});
	}
	else if (cmd[0] == '~rockpaperscissors' || cmd[0] == '~rps') {
		try { //
		let mbd = {
			color: 'white',
			author: {
				name: 'Rock Paper Scissors',
				icon_url: 'https://media.discordapp.net/attachments/755763092159332363/773688146755715122/rps_icon.png'
			},
			description: '<:rps_rock:773578979377807371> <:rps_paper:773579262048469062> <:rps_scissors:773579699565101117>'
		};
		message.channel.send({embed: mbd});
		} //
		catch (err) { message.channel.send(err.message); } //
	}
	else if (cmd[0] == '~testcommand') {
		
	}
        else if (cmd[0] == '~console') {
                if (message.author.id != id1 && message.author.id != id2) {
			let mbd = {
				color: 0xff0000,
				fields: [{
					name: '```Warning```',
					value: 'You do not have permission to use that command.'
				}]
			};
			message.channel.send({embed: mbd});
			return;
		}
		if (message.content.includes('process.env')) {
			let mbd = {
				color: 0xff0000,
				fields: [{
					name: '```Warning```',
					value: 'Please do not attempt to access the bot process file.'
				}]
			};
			message.channel.send({embed: mbd});
			return;
		}
		if (message.content.includes('client.login')) {
			let mbd = {
				color: 0xff0000,
				fields: [{
					name: '```Warning```',
					value: 'Please do not attempt to log into the client.'
				}]
			};
			message.channel.send({embed: mbd});
			return;
		}
                try {
			let msg = eval(message.content.replace('~console ', ''));
                        message.channel.send(JSON.stringify(msg));
                }
                catch(er) {
			let mbd = {
				color: 0xff0000,
				fields: [{
					name: '```Error```',
					value: er.message
				}]
			};
                        message.channel.send({embed: mbd});
                }
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
		message.channel.send(Math.ceil(Math.random() * Number(message.content.replace('~dice ', '')))); //
	}*/
});

client.login(process.env.BOT_TOKEN);
