const Discord = require('discord.js')
const got = require('got');
const { AudioPlayerStatus } = require("@discordjs/voice");
const RadioPlayer = require('../structures/RadioPlayer');
const { Command, CommandType } = require('gcommands');

// Create a new command with the name 'hello'
new Command({
	name: 'evropa2',
	description: 'Pustí rádio!',
	// GCommands Next offers different types of commands, we will only use slash and message commands here.
	type: [CommandType.SLASH, CommandType.MESSAGE],
	// The function thats executed when the user uses the command.
	run: async(message) => {
		if (message.member.voice) {
      RadioPlayer.startRadio(message.guild, message.member.voice.channel);

      const embedik = new Discord.MessageEmbed()
        .setColor("RANDOM")
        .setTitle("Evropa 2")
        .setImage("https://img.x-function.tech/ev2.jpg")
        /*.setFooter("Best radio")*/
        .setTimestamp();
      message.reply({ content: 'test' });
    } else {
      message.reply({ content: 'test' });
    }
	}
});