const { Command, CommandType } = require('gcommands');
const hyttpo = require('hyttpo').default;

new Command({
	name: 'api',
	description: 'api get!',
	type: [CommandType.SLASH, CommandType.MESSAGE],
	run: async(message) => {
		const output = (await hyttpo.get(`https://azura.izboxo.cz/api/nowplaying/oxoRaNCS`)).data;

        return message.reply(output.now_playing.song.text);
	}
});