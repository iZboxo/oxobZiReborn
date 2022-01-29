const { Command, CommandType } = require('gcommands');
const hyttpo = require('hyttpo').default;


new Command({
	name: 'info',
	description: 'get info!',
	type: [CommandType.SLASH, CommandType.MESSAGE],
	run: async(message) => {
		//return message.reply(`Hello ${message.user.username}!`);
        const endemit = (await hyttpo.get(`https://vicky.izboxo.cz/image`)).data;
        console.log(endemit.image);
        
	}
});