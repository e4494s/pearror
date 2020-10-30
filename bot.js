const Discord = require('discord.js');
//const Canvas = require('canvas');

const client = new Discord.Client();

const prefix = '~';

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
        'pencil'
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
        'fear'
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
        'short'
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

function makeSentence() {
	let mainCharacter = getName();
	let companion = getName();
	let story = '';
	story +=  `There once was a ${getAdjective()} ${getNoun(true)} named ${mainCharacter} who liked ${getVerb(false, false).participle} `;
	story += `while ${getVerb(true, false).participle} ${getNoun(true)}s. One ${getTimeOfDay()} ${mainCharacter} decided to go on an `;
	let destination = `${titleCase(getNoun(true))} of ${titleCase(getNoun(false))}`;
	story += `adventure with ${companion} the ${getNoun(true)}. "We must ${getVerb(false, true).present} to the ${destination}," `;
	story += `${mainCharacter} said. "It will be a ${getAdjective()} and ${getAdjective()} journey." ${Math.ceil(Math.random() * 100) + 1} `;
	story += `${getUnitOfTime()}s later, ${mainCharacter} and ${companion} arrived at the ${destination}, feeling very ${getAdjective()}.`;
	return story;
}

function titleCase(string) {
        return string[0].toUpperCase() + string.slice(1);
}

/*function shuffle(list) {
	let currentIndex = array.length;
	let temporaryValue, randomIndex;
	while (0 !== currentIndex) {
		randomIndex = Math.floor(Math.random() * currentIndex);
		currentIndex -= 1;
		temporaryValue = array[currentIndex];
		array[currentIndex] = array[randomIndex];
		array[randomIndex] = temporaryValue;
  	}
	return array;
}*/
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
		message.channel.send('`~ping`: Return bot latency\n' +
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
