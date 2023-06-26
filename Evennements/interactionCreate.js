const Discord = require("discord.js")


module.exports = async (bot, interaction) => {
      
    if (interaction.type === Discord.InteractionType.ApplicationCommandAutocomplete) {

        let entry = interaction.options.getFocused()

        // Autres

        if (interaction.commandName === 'help') {

            let choices = bot.commands.filter(cmd => cmd.name.includes(entry))
            await interaction.respond(entry === "" ? bot.commands.map(cmd => ({name: cmd.name, value: cmd.name})) : choices.map(choice => ({name: choice.name, value: choice.name}) ))
        }

        if (interaction.commandName === 'scrim') {

            let choices = ["Tier S", "Tier A", "Tier B", "Tier C"]
            const filtered = choices.filter(choice => choice.startsWith(entry));
		    await interaction.respond(filtered.map(choice => ({ name: choice, value: choice })))
        }
    }    



    try {
        
        if (interaction.type === Discord.InteractionType.ApplicationCommand) { 
 
            let command = require(`../Commandes/Moderation/${interaction.commandName}`)
            command.run(bot, interaction, interaction.options)
        }
    } catch {}

    try {

        if (interaction.type === Discord.InteractionType.ApplicationCommand) { 
 
            let command = require(`../Commandes/Utile/${interaction.commandName}`)
            command.run(bot, interaction, interaction.options)
        }
    } catch {}

    try {
        
        if (interaction.type === Discord.InteractionType.ApplicationCommand) { 
 
            let command = require(`../Commandes/Information/${interaction.commandName}`)
            command.run(bot, interaction, interaction.options)
        }
    } catch {}

    try {
        
        if (interaction.type === Discord.InteractionType.ApplicationCommand) { 
 
            let command = require(`../Commandes/Jeux/${interaction.commandName}`)
            command.run(bot, interaction, interaction.options)
        }
    } catch {}
}