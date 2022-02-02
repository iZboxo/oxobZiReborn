const { Command, CommandType } = require('gcommands');
const hyttpo = require('hyttpo').default;
const Discord = require('discord.js')
const moment = require('moment');
const si = require('systeminformation');
const momentDurationFormatSetup = require("moment-duration-format");
momentDurationFormatSetup(moment);
const delay = require("delay");

new Command({
	name: 'botinfo',
	description: 'Get bot botinfo!',
	type: [CommandType.SLASH, CommandType.MESSAGE],
	run: async(message) => {
        return message.reply(`${message.ws.ping}`);
	}
});d