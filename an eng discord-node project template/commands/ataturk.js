module.exports = {
  kod: "ataturk",
async run (client, message, args) {
  const passwords = require('../passwords.json')
  var rastgelesayılar = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"]
  var rastgelesonuç = Math.floor(Math.random()*rastgelesayılar.length)
  const randomgörsel = rastgelesayılar[rastgelesonuç];
  const axios = require('axios')

axios

      .get("https://api-rhino.glitch.me/" + passwords.RHIN_API + "/ataturk" + randomgörsel + ".json")

      .then(response => {
      const { MessageEmbed } = require('discord.js')
      const embed = new MessageEmbed()
      .setTitle('Best Person In World')
      .setImage(response.data.ataturk)
      message.channel.send(embed)
      })
}
}
