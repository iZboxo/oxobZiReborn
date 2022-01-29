const { Command, CommandType } = require('gcommands');

// Create a new command with the name 'hello'
new Command({
	name: 'info',
	description: 'get info!',
	// GCommands Next offers different types of commands, we will only use slash and message commands here.
	type: [CommandType.SLASH, CommandType.MESSAGE],
	// The function thats executed when the user uses the command.
	run: async(message) => {
		return message.reply(`Hello ${message.user.username}!`);
	}
});