exports.run = function(client, message, args) {
        message.channel.send("Rise Hazır Discord Botu Altyapısı."); // message.channel.send Yazan yerdeki "channel" kısmını "author" yaparsan mesajınız DM den gider.
    };

module.exports.conf = { // Özel ayarları belirtiyoruz
  enabled: true, // Açık mı - Kapalımı?
  guildOnly: false, // Sadece sunucudamı kullanılsın?
  aliases: ["tst"], // Kısaltmalar yada diğer anlamları
  permLevel: 0 // Yetki seviyeniz
};

module.exports.help = {
  name: 'test',
  description: '',
  usage: 'test'
};
//Rise Bot
