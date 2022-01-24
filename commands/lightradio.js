const { MessageEmbed } = require('discord.js')
const got = require('got');
const { AudioPlayerStatus } = require("@discordjs/voice");
const RadioPlayer = require('../structures/RadioPlayer');
const { Command, CommandType } = require('gcommands');

// Create a new command with the name 'hello'
new Command({
	name: 'radio',
	description: 'Listen to music!',
	// GCommands Next offers different types of commands, we will only use slash and message commands here.
	type: [CommandType.SLASH, CommandType.MESSAGE],
	// The function thats executed when the user uses the command.
	run: async(message) => {
		if (message.member.voice.channel) {
      RadioPlayer.startRadio(message.guild, message.member.voice.channel);

      const embedik = new MessageEmbed()
        .setColor("RANDOM")
        .setTitle("Started playing radio!")
        //.setImage("https://img.x-function.tech/ev2.jpg")
        .setFooter({ text: '- iZboxo.cz' })
        .setTimestamp();
      message.reply({ embeds: [ embedik ] });
    } else {
      message.reply({ content: '🧨 Join voice channel first!' });
    }
	}
});