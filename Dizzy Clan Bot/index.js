//variables
var num_members;
var welcome_messages = [
	"Welcome to the Dizzy Clan,",
	"You have just joined the greatest clan,",
	"Greetings,",
	"Salutations,",
	"I hope you enjoy your stay,",
	"Dizzy says Hi! ",
	"Hola,",
	"I hope you're doing well today,",
	"Salute,",
	"WELCOME!!! "
];

//require the necessary discord.js classes
const { Client, Intents } = require("discord.js");
const { token } = require("./config.json");

//create a new client instance
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MEMBERS ] });

//when the client is ready, run this code (only once)
client.on('ready', () => {
	console.log("Online");
});

//sends user a welcome message upon joining
client.on('guildMemberAdd', member => {
	
	
	//generates random number between 1 and 10 to grab message from welcome_messages
	var randomNumber = Math.floor(Math.random() * 11);
	
	const channel = member.guild.channels.cache.get('924454879987122186');
    channel.send(welcome_messages[randomNumber] + `${member}` + '.');

});

//sends message to the general chat that user has left
client.on('guildMemberRemove', member => {
    const channel = member.guild.channels.cache.get('924454879987122186');
	
    channel.send(`Later!! ${member}.`);

});

client.login(token);