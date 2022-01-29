const { Command, CommandType } = require('gcommands');
const hyttpo = require('hyttpo').default;


new Command({
	name: 'info',
	description: 'get info!',
	type: [CommandType.SLASH, CommandType.MESSAGE],
	run: async(message) => {
		return message.reply(`Hello ${message.user.username}!`);
	}
});