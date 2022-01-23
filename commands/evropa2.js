const Discord = require('discord.js')
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
            const channel = await message.client.channels.fetch(message.member.voice.channelId)
            const connection = await channel.join();

            c
              /*.then(connection => {
                const embedik = new Discord.MessageEmbed()
                .setColor("RANDOM")
                .setTitle("Evropa 2")
                .setImage("https://img.x-function.tech/ev2.jpg")
                .setFooter("Best radio")
                .setTimestamp();
                  message.reply(embedik)
                  connection.play(`http://ice.actve.net/fm-evropa2-128`);
              })*/
              .catch(console.log);
          } else {
            message.reply(':x: You must be in channel!');
          }
	}
});