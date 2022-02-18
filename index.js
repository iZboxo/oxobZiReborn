require('dotenv').config();
const { GClient, Plugins, Command, Component } = require('gcommands');
const { setupPlayer } = require('./structures/RadioPlayer');
const { Intents, Collection } = require('discord.js');
const { join } = require('path');

Command.setDefaults({
	cooldown: '5s',
});

Component.setDefaults({
	onError: (ctx, error) => {
		return ctx.reply('Error! Please contact developer! Cézar Salát')
	} 
});


Plugins.search(__dirname);

const client = new GClient({
	dirs: [
		join(__dirname, 'commands')
	],
	messagePrefix: '!',
	devGuildId: process.env.DEV_SERVER,
	intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILD_VOICE_STATES],
});

client.radio = new Collection();
client.radioPlayer = setupPlayer();


client.login(process.env.token);