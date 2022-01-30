const { Command, CommandType, ArgumentType } = require('gcommands');

new Command({
	name: 'pong',
	description: 'What this should do?',
	type: [CommandType.SLASH, CommandType.MESSAGE],
    arguments: [
        {
            name: 'nowplaying',
            type: ArgumentType.SUB_COMMAND,
            description: 'omg nowplejing'
        },
        {
            name: 'pause',
            type: ArgumentType.SUB_COMMAND,
            description: 'omg pauz'
        }
    ],
	run: (message) => {
        const subCommand = message.arguments.getSubcommand();

        if (subCommand === 'nowplaying') {
            return message.reply(`Teraz hrá: ${message.user.username}!`);
        } else if(subCommand === 'pause') {
            return message.reply(`Ping pong bot is working fine! ${message.user.username}!`);
        }
	}
});