const { Command, CommandType } = require('gcommands');

// Create a new command with the name 'hello'
new Command({
	name: 'ping',
	description: 'What this should do?',
	// GCommands Next offers different types of commands, we will only use slash and message commands here.
	type: [CommandType.SLASH, CommandType.MESSAGE],
	// The function thats executed when the user uses the command.
	run: (ctx) => {
		return ctx.reply(`Ping pong bot is working fine! ${ctx.user.username}!`);
	}
});