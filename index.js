//Bibliotecas Usadas.
const Discord = require('discord.js');
const bot = new Discord.Client;
const ytdl = require('ytdl-core');
const streamOptions = {seek: 0, volume: 1};
var servers = {};

//Token do Bot.
const token = "ODM5MjAzOTczMDkyMzQzODA4.YJGPmg.RayZwQWcWmPrZjKKVI8lS0c2eI8"

//Quando o bot estiver ligado...
bot.on('ready', () => {
    //Informe no Console:
    console.log(`O Meadow foi Ligado na Tag: "${bot.user.tag}" com sucesso!!!`);
    //Definir Rich Presence do Bot.
    bot.user.setActivity('Lo-Fi' , { type: 'LISTENING' });

})

//Quando o bot receber uma Mensagem...
bot.on('message', msg => {
    if(msg.author.bot) return;
    const channelv = msg.member.voice.channel;
    if(msg.content === '/ajuda') msg.reply('`Meu prefixo é "/" \n `hiphop` \n  `sad` \n `codding` \n *Lembrando que ainda estou sendo Desenvolvido.*')
    if(msg.content === '/ping') msg.reply(`🏓 Meu ping é: ${Date.now() - msg.createdTimestamp}ms`);
    
    if(msg.content ==='/hiphop') {
        if(!channelv) {
            console.log('Canal não encontrado.')
            msg.reply('Desculpe, mas você não está conectado em uma Sala de Voz. \n Se achar que isto é um Erro, por favor reporte para `M e a d o w#1030`');
        }
        if(channelv){
            console.log('O canal foi Encontrado!!')
            channelv.join()
            .then(connection => {
                const stream = ytdl('https://www.youtube.com/watch?v=kEXTVxj73vs', {filter:'audioonly'});
                const DJ = connection.play(stream, streamOptions)
                DJ.on('end', end => {
                    channelv.leave();
                })
                
            })
            .catch(console.error);
            
        }
        if(msg.content === '/sair'){
            message.guild.voiceConnection.disconnect();
        }
    }
    if(msg.content ==='/sad') {
        if(!channelv) {
            console.log('Canal não encontrado.')
            msg.reply('Desculpe, mas você não está conectado em uma Sala de Voz. \n Se achar que isto é um Erro, por favor reporte para `M e a d o w#1030`');
        }
        if(channelv){
            console.log('O canal foi Encontrado!!')
            channelv.join()
            .then(connection => {
                const stream = ytdl('https://www.youtube.com/watch?v=zqmIUKoe-q0', {filter:'audioonly'});
                const DJ = connection.play(stream, streamOptions)
                DJ.on('end', end => {
                    channelv.leave();
                })
                
            })
            .catch(console.error);
            
        }
        
        if(msg.content === '/sair'){
            message.guild.voiceConnection.disconnect();
        }
    }
    if(msg.content ==='/codding') {
        if(!channelv) {
            console.log('Canal não encontrado.')
            msg.reply('Desculpe, mas você não está conectado em uma Sala de Voz. \n Se achar que isto é um Erro, por favor reporte para `M e a d o w#1030`');
        }
        if(channelv){
            console.log('O canal foi Encontrado!!')
            channelv.join()
            .then(connection => {
                const stream = ytdl('https://www.youtube.com/watch?v=_ITiwPMUzho', {filter:'audioonly'});
                const DJ = connection.play(stream, streamOptions)
                DJ.on('end', end => {
                    channelv.leave();
                })
                
            })
            .catch(console.error);
            
        }
        if(msg.content === '/sair'){
            message.guild.voiceConnection.disconnect();
        }
        
    }
    
})

//Ligar o Bot passando o Token.
bot.login(token);