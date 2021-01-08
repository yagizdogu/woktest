module.exports = {
    category: 'Fun',
    cooldown: '10s',
    testOnly: true,
    callback: ({ message }) => {

const choices = ['🍎', '🍊', '🍐', '🍋', '🍉', '🍇', '🍓', '🍒'];
		const a = choices[Math.floor(Math.random() * choices.length)];
		const b = choices[Math.floor(Math.random() * choices.length)];
		const c = choices[Math.floor(Math.random() * choices.length)];


		message.channel.send(`**[ ${a} ${b} ${c} ]**\n`);

		if (a == b && a == c) {
			message.reply('You won! 🎉');
		}
		else {
			message.reply('You lost!');
		}
	}

};