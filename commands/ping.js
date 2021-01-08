module.exports = {
    category: 'Fun',
    cooldown: '10s',
    testOnly: true,
    callback: ({ message }) => {
        message.reply('pong')
    },
}