const { MessageEmbed } = require('discord.js')
const got = require('got');
const { AudioPlayerStatus } = require("@discordjs/voice");
const RadioPlayer = require('../structures/RadioPlayer');
const { Command, CommandType } = require('gcommands');
const hyttpo = require('hyttpo').default;

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

      const res = (await hyttpo.get(`http://${process.env.ip}/api/nowplaying/oxoRaNCS`)).data;

      const embedik = new MessageEmbed()
        .setColor("RANDOM")
        .setTitle("Started playing oxoRaNCS!")
        //.setImage("https://img.x-function.tech/ev2.jpg")
        .setDescription(`Now playing: **${res.now_playing.song.text}**`)
        .setFooter({ text: '- iZboxo.cz' })
        .setTimestamp();
      message.reply({ embeds: [ embedik ] });
    } else {
      const msg = await message.reply({ content:"🧨 Join voice channel first!", fetchReply:true })
      //msg.react('😁');
    }
	}
});