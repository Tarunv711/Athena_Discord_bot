require('dotenv').config();

const Discord = require('discord.js');

const { Client } = require('discord.js');

const client = new Client();

const channel = client.channels.cache.get(`864900707392159747`);

client.on('ready', () =>{
    console.log(`${client.user.tag} has logged in. `);
} );




        let gif = new Discord.MessageEmbed() 
        .setColor(0x000000)
        .setDescription(` `)
        .attachFiles(["https://media.giphy.com/media/USQldFTYp0CFd2wmrc/giphy.gif"]);

        client.on('message', (message) =>{
            console.log(`[${message.author.tag}]: ${message.content}`);
            //message.toLowerCase();
            const pref = 'https://qa--athenaviewer.netlify.app/prompts/';
            if(message.content.startsWith(pref)){
                const user = message.author;
                const identity = message.content.slice(pref.length).trim();
                message.channel.send(gif);
                console.log(message.id);
                //const channel  = new ThreadChannel
                
                const thread = channel.threads.create({
                    name: `${user.id}'s Athena Prompt Thread`,
                    autoArchiveDuration: 1440,
                    type: 'private_thread',
                    reason: 'Prompt Responses will be updated here',
                });
                thread.members.add(`${user.id}`);
                message.channel.send(`<@${user.id}> has sent in an athena link`);
            }
        } );



        
client.login(process.env.DISCORDJS_BOT_TOKEN);

