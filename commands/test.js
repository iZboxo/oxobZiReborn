const { Command, CommandType } = require('gcommands');

new Command({
	name: 'ping',
	description: 'What this should do?',
	type: [CommandType.SLASH, CommandType.MESSAGE],
    arguments: [
        {
            name: 'no'
        }
    ],
	run: (message) => {
		return message.reply(`Ping pong bot is working fine! ${message.user.username}!`);
	}
});