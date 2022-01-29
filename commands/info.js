const { Command, CommandType } = require('gcommands');
const { MessageEmbed } = require('discord.js')
const got = require('got');

new Command({
	name: 'info',
	description: 'Get bot info!',
	type: [CommandType.SLASH, CommandType.MESSAGE],
	run: (message) => {
		const embedik = new MessageEmbed()
        .setColor("RANDOM")
        .setTitle("Started playing oxoRaNCS!")
        //.setImage("https://img.x-function.tech/ev2.jpg")
        //.setDescription(`Now playing: **${output.now_playing.song.text}**`)
        .setFooter({ text: '- iZboxo.cz' })
        .setTimestamp();
      message.reply({ embeds: [ embedik ] });
	}
});