const { Command, CommandType } = require('gcommands');
const hyttpo = require('hyttpo').default;

new Command({
	name: 'botinfo',
	description: 'Get bot info!',
	type: [CommandType.SLASH, CommandType.MESSAGE],
	run: async(message) => {
		const endemit = (await hyttpo.get(`https://vicky.izboxo.cz/image`)).data;

        return message.reply(endemit.image);
	}
});