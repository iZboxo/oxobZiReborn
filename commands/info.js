const { Command, CommandType } = require('gcommands');
const { MessageEmbed } = require('discord.js')
const got = require('got');
const hyttpo = require('hyttpo').default;

new Command({
	name: 'info',
	description: 'Get bot info!',
	type: [CommandType.SLASH, CommandType.MESSAGE],
	run: (message) => {

        const output = (await hyttpo.get(`https://vicky.izboxo.cz/image`)).data;

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