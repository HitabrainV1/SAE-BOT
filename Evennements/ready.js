const Discord = require("discord.js")
const loadSlashCommands = require("../Loaders/loadSlashCommands")


module.exports = async (bot) => {

    await loadSlashCommands(bot)

    console.log(`\n🗿 ▬ ${bot.user.tag}\n\n▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬\n\n`)

    

    const ChannelID_Scrims = "1044014003267055779"
    const ms = require('ms')
    const loopTime = ms("1m")

    const valideEmoji = {

        name: ":valide:",
        id: "1121461608045101056"
    }

    // console.log(bot)

    const embed = new Discord.EmbedBuilder()
        .setColor("#66FFFF")
        //.setThumbnail(bot.user.displayAvatarURL({ dynamic: true }))
        .setTitle(`\`📢\` | Rappel`)
        .setDescription(`<${valideEmoji.name}${valideEmoji.id}> N'oubliez pas d'aller lire le <#1044014002902138973> avant de poster votre demande.
        \n<${valideEmoji.name}${valideEmoji.id}> Merci de préciser le tier du roster et l'heure dans votre demande.
        \n<${valideEmoji.name}${valideEmoji.id}> Si vous quittez le serveur vos messages seront automatiquement supprimés.`)
        .setFooter({text: "Utilise /scrim pour faire une reqête"})


    async function sendEmbed(ChannelID) {

        const salon = await bot.channels.fetch(ChannelID);

        if (salon) {
            const messages = await salon.messages.fetch({ limit: 1 });
            const dernierMessage = messages.first();

            // Vérifie si le dernier message est déjà l'embed préexistant
            if (dernierMessage && dernierMessage.author.id === bot.user.id && dernierMessage.embeds.length > 0) {

                const embedPreexistant = dernierMessage.embeds[0];

                if (embedPreexistant.title === embed.data.title && embedPreexistant.description === embed.data.description) {
                    console.log('Dernier message est déjà l\'embed.');
                    return;
                }

                else {

                    salon.send({ embeds: [embed] })
                        .then(() => console.log('Embed envoyé avec succès.'))
                        .catch(console.error);
                }
            }
        }
    }


    function planifierEnvoiEmbed(ChannelID) {

        sendEmbed(ChannelID);

        setInterval(() => {
            sendEmbed(ChannelID);
        }, loopTime); 
    }

    planifierEnvoiEmbed(ChannelID_Scrims);
}