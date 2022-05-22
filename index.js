const { Client, Intents, MessageEmbed, MessageActionRow, MessageButton, ButtonInteraction, MessageComponentInteraction } = require('discord.js');
const { jobs, servers, job_emojis } = require('./datas.json');
const colors = require('./colors.json');

//const { token } = require('./config.json'); //테스트용

const prefix = '%';

const client = new Client({ intents: [
    Intents.FLAGS.GUILDS,
    Intents.FLAGS.GUILD_MESSAGES,
    Intents.FLAGS.GUILD_MESSAGE_REACTIONS,
    Intents.FLAGS.GUILD_MEMBERS,
    Intents.FLAGS.GUILD_EMOJIS_AND_STICKERS
    ],
    partials: ['MESSAGE', 'CHANNEL', 'REACTION']
});

client.once('ready', () => {
    console.log("흠냥봇 is ready!");
    console.log(`Prefix : ${prefix}`);
});

client.on('message', async message => {
    if (message.content.split(' ')[0] === prefix+'정보') {
        message.channel.send("안녕하세요. 흠냥봇입니다.");
    }
});


//테스트용
//client.login(token);

//Heroku 전용
client.login(process.env.TOKEN);