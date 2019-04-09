exports.run = function(client, message, args) {
        message.channel.send("Testament Hazır Discord Botu Altyapısı.");
    };

module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["tst"],
  permLevel: 0
};

module.exports.help = {
  name: 'test',
  description: '',
  usage: 'test'
};
//Testament Bot - TAT
