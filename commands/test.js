const { Command, CommandType, ArgumentType } = require('gcommands');

new Command({
	name: 'ping',
	description: 'What this should do?',
	type: [CommandType.SLASH, CommandType.MESSAGE],
    arguments: [
        {
            name: 'nowplaying',
            type: ArgumentType.SUB_COMMAND,
            description: 'omg nowplejing'
        }
    ],
	run: (message) => {
		return message.reply(`Ping pong bot is working fine! ${message.user.username}!`);
	}
});