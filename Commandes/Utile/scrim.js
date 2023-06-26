const Discord = require("discord.js")
const ms = require("ms")

module.exports = {

    name: "scrim",
    description: "Permet de faire une requête de scrim",
    permission: "Aucune",
    dm: false,
    options: [

        {
            type: "string",
            name: "roster",
            description: "Le tier du roster", 
            required: true,
            autocomplete: true
        }, 
        {
            type: "string",
            name: "heure",
            description: "L'heure du scrim", 
            required: true,
            autocomplete: false
        },
        {
            type: "string",
            name: "précision",
            description: "Dites des informations en plus dans votre requête", 
            required: false,
            autocomplete: false
        }
    ],

    async run(bot, message, args) {

        let Scrim_Tier = args.getString("roster")
        let Scrim_Heure = args.getString("heure")
        let Scrim_Note = args.getString("précision")

        if (!Scrim_Note) Scrim_Note = "Aucune précision apporté."

        let member = message.guild.members.cache.get(message.user.id)

        const embed = new Discord.EmbedBuilder()
            .setColor("#D2042D")
            .setThumbnail(message.user.displayAvatarURL({dynamic: true}))
            .setTitle(`\`📃\` | Informations de la requête :`)
            .setDescription(`
            ${message.user} à fait une **demande de scrim**.
            
            **Roster :** \`${Scrim_Tier}\`
            **Heure :** \`${Scrim_Heure}\`
            
            **Note :** \`${Scrim_Note}\``)
            .setFooter({ text: `Fait /scrim si toi aussi tu veux faire un scrim !` })

        message.reply({embeds: [embed]})
    }
}