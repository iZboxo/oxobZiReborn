const { MessageEmbed } = require('discord.js')
const got = require('got');
const { AudioPlayerStatus } = require("@discordjs/voice");
const RadioPlayer = require('../structures/RadioPlayer');
const { Command, CommandType } = require('gcommands');
const hyttpo = require('hyttpo').default;

// Create a new command with the name 'hello'
new Command({
	name: 'radioo',
	description: 'Listen to music!',
	// GCommands Next offers different types of commands, we will only use slash and message commands here.
	type: [CommandType.SLASH, CommandType.MESSAGE],
	// The function thats executed when the user uses the command.
	run: async(message) => {
		if (message.member.voice.channel) {
      RadioPlayer.startRadio(message.guild, message.member.voice.channel);

      const output = (await hyttpo.get(`http://${process.env.ip}/api/nowplaying/oxoRaNCS`)).data;
      const output2 = (await hyttpo.get(`https://vicky.izboxo.cz/image`)).data;

      const embedik = new MessageEmbed()
        .setColor("RANDOM")
        .setTitle("Started playing oxoRaNCS!")
        //.setImage("https://img.x-function.tech/ev2.jpg")
        .setDescription(`Now playing: **${output.now_playing.song.text}**`)
        //.setImage(output2.image)
        .setFooter({ text: '- iZboxo.cz' })
        .setTimestamp();
      message.reply({ embeds: [ embedik ] });
    } else {
      const msg = await message.reply({ content:"🧨 Join voice channel first!", fetchReply:true })
      //msg.react('😁');
    }
	}
});