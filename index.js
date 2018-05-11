const Discord = require('discord.js');
const client = new Discord.Client();
const token = "NDQ0NDc1NzEwMzgwMzEwNTM5.DdcnHw.yfJ_NViAonq2SrSVG__M2z6ADbY";

client.on('ready', () => {
  console.log(`Im Ready!`);
});

client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('Pong!');
  }
});

client.on('message', msg => {
   if(msg.content === 'rock' || msg.content ==='paper' || msg.content === 'scissors'){
       var response = computerChoice();
       if((msg.content === 'rock' && response === 'paper')||(msg.content === 'paper' && response === 'scissors')||(msg.content === 'scissors' && response ==='rock')){
           msg.reply("Bot chose " + response + " therefore you lose");
       } else {
           msg.reply("Bot chose " + response + " congrats on the win!");
       }
   } 
});

function computerChoice(){
    var response = ['rock', 'paper', 'scissors'];
    var index = Math.floor(Math.random() * 3);
    return response[index];
}

client.login(token);