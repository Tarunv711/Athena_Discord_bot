require('dotenv').config();

const Discord = require('discord.js');

const { Client } = require('discord.js');

const client = new Client();

//const channel = client.channels.cache.get(`${message.channel.id}`);

client.on('ready', () =>{
    console.log(`${client.user.tag} has logged in. `);
} );

client.on('message', (message) =>{
    console.log(`[${message.author.tag}]: ${message.content}`);
    if(message.content == 'hello'){
        const exampleEmbed = new Discord.MessageEmbed()
        .setTitle('Some title')
        .setURL('https://www.youtube.com/watch?v=O7ulUVts3wI')
        //.setImage('https://qa--athenaviewer.netlify.app/prompts/1374a555-75dd-40ff-929f-7727ddf85218')
        .addFields({
            video: {
                url: 'https://www.youtube.com/watch?v=O7ulUVts3wI',
                proxyURL: 'https://www.youtube.com/watch?v=O7ulUVts3wI',
                height: 500,
                width: 500,
            }
            }
        )
        .setTimestamp();
    
        
        message.channel.send(exampleEmbed);
    }
} );

client.on('message', (message) =>{
    console.log(`[${message.author.tag}]: ${message.content}`);
    if(message.content == 'vid'){
        const emb = {
            type: `video`,
            title: 'Some title',
            url: 'https://qa--athenaviewer.netlify.app/prompts/1374a555-75dd-40ff-929f-7727ddf85218',

            
            image: {
                url: 'https://www.youtube.com/watch?v=O7ulUVts3wI',
                proxyURL: 'https://www.youtube.com/watch?v=O7ulUVts3wI',
                height: 500,
                width: 500,
            },
                
            //timestamp: new Date()
            

        }
        message.channel.send({embed: emb});
    }
        });

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
                
                const thread = message.channel.threads.create({
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

