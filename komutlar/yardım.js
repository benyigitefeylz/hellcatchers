const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

exports.run = (client, message, params) => {
  const embedyardim = new Discord.RichEmbed()
  .setTitle("Komutlar")
  .setDescription('')
  .setColor(0x00ffff)
  .addField("**Eğlence ve Kullanıcı Komutları:**", `tr?banned = Dene ve Gör! \ntr?avatarım = Avatarınınızı Gösterir. \ntr?herkesebendençay = Herkese Çay Alırsınız. \ntr?koş = Koşarsınız.\ntr?çayiç = Çay İçersiniz. \ntr?çekiç = İstediğiniz Kişiye Çekiç Atarsınız. \ntr?çayaşekerat = Çaya Şeker Atarsınız. \ntr?yumruk-at = Yumruk Atarsınız. \ntr?yaz = Bota İstediğiniz Şeyi Yazdırırsınız. \ntr?sunucuresmi = BOT Sunucunun Resmini Atar. \ntr?sunucubilgi = BOT Sunucu Hakkında Bilgi Verir. \ntr?kullanıcıbilgim = Sizin Hakkınızda Bilgi Verir.  \ntr?söv = Etiketlediğiniz Kişiye Söver.  \ntr?kralol = Kral Olursunuz.  \ntr?kaçcm = Kaç cm Olduğunu Söyler.  \ntr?afk = AFK Olursunuz.  \ntr?terfi = Sizi Terfi Ettirir.  \ntr?başvuru = Yetkili Başvurusuna Katılırsınız.  \ntr?ailemiz = Sunucudaki Ailenizi Gösterir.  \ntr?canlıdestek = Canlı Desteğe Haber Verir.`)
  .addField("**Yetkilisi Komutlar**", `tr?ban = İstediğiniz Kişiyi Sunucudan Banlar. \ntr?kick  = İstediğiniz Kişiyi Sunucudan Atar. \ntr?unban = İstediğiniz Kişinin Yasağını Açar. \ntr?sustur = İstediğiniz Kişiyi Susturur. \ntr?oylama = Oylama Açar. \ntr?duyuru = Güzel Bir Duyuru Görünümü Sağlar.`)
  .addField("**Ana Komutlar**", "tr?yardım = BOT Komutlarını Atar. \ntr?bilgi = BOT Kendisi Hakkında Bilgi Verir. \ntr?ping = BOT Gecikme Süresini Söyler. \ntr?davet = BOT Davet Linkini Atar. \ntr?istatistik = BOT İstatistiklerini Atar.")
  .addField("**Yapımcı**", " **ᴛʀ ◈ Jozefᵀᴿ#4924** ")
  .setFooter('**--------------------------**')
  if (!params[0]) {
    const commandNames = Array.from(client.commands.keys());
    const longest = commandNames.reduce((long, str) => Math.max(long, str.length), 0);
    message.channel.send(embedyardim);
  } else {
    let command = params[0];
    if (client.commands.has(command)) {
      command = client.commands.get(command);
      message.author.send('asciidoc', `= ${command.help.name} = \n${command.help.description}\nDoğru kullanım: ` + prefix + `${command.help.usage}`);
    }
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['h', 'halp', 'help', 'y'],
  permLevel: 0
};

exports.help = {
  name: 'yardım',
  description: 'Tüm komutları gösterir.',
  usage: 'yardım [komut]'
};
