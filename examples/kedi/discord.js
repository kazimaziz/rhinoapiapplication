const Discord = require('discord.js')
const client = new Discord.Client()

client.on('message', message => {
if (message.content === 'cat') {
const api = require('./apikey.json)
const rhinoapi_token = api.API_KEY
 var rastgelesayılar = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"]
  var rastgelesonuç = Math.floor(Math.random()*rastgelesayılar.length)
  const randomgörsel = rastgelesayılar[rastgelesonuç];
  const axios = require('axios')

axios

      .get("https://api-rhino.glitch.me/" + rhinoapi_token + "/kedi" + randomgörsel + ".json")

      .then(response => {
      message.channel.send(response.data.resim)
      })
      }
      })

client.login('YOUR_SECRET_TOKEN')
