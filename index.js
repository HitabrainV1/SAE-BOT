require("./Evennements/anticrash.js")()

const Discord = require("discord.js")
const intents = new Discord.IntentsBitField(3276799)
const bot = new Discord.Client({intents})

const { token } = require("./config.json")

const loadCommand = require("./Loaders/loadCommands")
const loadEvents = require("./Loaders/loadEvents")


bot.commands = new Discord.Collection()

bot.color = "#ecc511"
bot.dev = 469870315623677962

bot.login(token)

loadCommand(bot)
loadEvents(bot)