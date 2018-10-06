const Discord = require('discord.js');
const client = new Discord.Client();
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
    client.user.setGame('#-MRC ','https://www.twitch.tv/A7mdkw');

});
client.on('ready', () => {
  console.log('              Bot Is Online')
});
client.login('NDk1OTM0NzI5MDY2MTE5MTc5.Dpdkmw.9KJe38CAa5CoItpH_Hxub9pg-cI');

