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
        },
        {
            name: 'nowplaying',
            type: ArgumentType.SUB_COMMAND,
            description: 'omg nowplejing'
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