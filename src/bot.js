require('dotenv').config();

const Discord = require('discord.js');

const { Client } = require('discord.js');

require('discord-reply');

const client = new Discord.Client();

const channel = client.channels.cache.get(`864900707392159747`);

client.on('ready', () =>{
    console.log(`${client.user.tag} has logged in. `);
} );




        

        client.on('message', (message) =>{
            console.log(`[${message.author.tag}]: ${message.content}`);

            const pref = 'https://qa--athenaviewer.netlify.app/prompts/';

            if(message.content.startsWith(pref)){

                const user = message.author;

                let gif = new Discord.MessageEmbed() 
        .setColor(0x000000)
        .setDescription(`<@${user.id}> has sent in an athena link`)
        .attachFiles(["https://media.giphy.com/media/USQldFTYp0CFd2wmrc/giphy.gif"]);

                const identity = message.content.slice(pref.length).trim();

                console.log(message.id);

                console.log(client.id);
                
                message.lineReply(gif);

            }
        } );



        
client.login(process.env.DISCORDJS_BOT_TOKEN);

