const Discord = require("discord.js")
const ms = require("ms")

module.exports = {

    name: "mate",
    description: "Permet de faire une recherche de mates",
    permission: "Aucune",
    dm: false,
    options: [

        {
            type: "string",
            name: "demande",
            description: "La demande de la recherche", 
            required: true,
            autocomplete: false
        }
    ],

    async run(bot, message, args) {

        let request = args.getString("demande")
        if (!request) { request = "La demande n'a pas été comprise par le bot."}

        const RoleID_RechercheDeMates = "1121177108459307048"

        const embed = new Discord.EmbedBuilder()
            .setColor("#ecc511")
            .setThumbnail(message.user.displayAvatarURL({dynamic: true}))
            .setTitle(`Un membre recherche des mates`)
            .setDescription(`${message.user} demande : \`${request}\`\n\nMention : <@&${RoleID_RechercheDeMates}>`)
            .setFooter({ text: `Fait /mate si toi aussi tu recherches des mates !` })


        try {

            message.channel.send({ content: `<@&${RoleID_RechercheDeMates}>`, embeds: [embed]})
            message.reply({content: '\`✅\` | Votre demande à été envoyé avec succès', ephemeral: true})
        }

        catch {

            message.reply({content: '\`❌\` | Il y a eu un problème avec votre demande', ephemeral: true})
        }
    }
}