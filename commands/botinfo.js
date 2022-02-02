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
	description: 'Get bot info!',
	type: [CommandType.SLASH, CommandType.MESSAGE],
	run: async(message) => {
		const endemit = (await hyttpo.get(`https://vicky.izboxo.cz/image`)).data;

        return message.reply(endemit.image);
	}
});