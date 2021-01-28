const {MessageEmbed} = require("discord.js")
module.exports = {
  name: "ban",
  description: "Ban the bad boy",
  args: true,
  usage: "(member) [reason]",
  execute(message, args) {
    let client = message.client
       const member = message.mentions.members.first()
        const reason = args.slice(1).join(" ")

        if(!message.member.hasPermission('BAN_MEMBERS')) {
            const no = new MessageEmbed()
            .setAuthor(`${client.user.username}`, `${client.user.displayAvatarURL({ dynamic: true})}`)
            .setDescription(`You dont have any permissions to execute this command!`)
            .setColor(`#131313`)
            message.channel.send(no)
        } else {
            if(!message.guild.me.hasPermission("BAN_MEMBERS")) {
                    const no2 = new MessageEmbed()
                    .setAuthor(`${client.user.username}`, `${client.user.displayAvatarURL({ dynamic: true})}`)
                    .setDescription(`I dont have permissions to ban!`)
                    .setColor(`#131313`)
                    message.channel.send(no2)
            } else {

            if(!member) {
                const members = new MessageEmbed()
                .setAuthor(`${client.user.username}`, `${client.user.displayAvatarURL({ dynamic: true})}`)
                .setDescription(`Please mention someone to ban!`)
                .setColor(`#131313`)
                message.channel.send(members)
            } else {
                if(!reason) {
                    const r = new MessageEmbed()
                    .setAuthor(`${client.user.username}`, `${client.user.displayAvatarURL()}`)
                    .setDescription(`Please specify a reason!`)
                    .setColor(`#131313`)
                    message.channel.send(r)
                } else {
                    if(member.bannable) {
                        member.ban({reason: reason})
                        const done = new MessageEmbed()
                        .setTitle('Success!')
                        .setAuthor(`${client.user.username}`, `${client.user.displayAvatarURL({ dynamic: true})}`)
                        .setDescription(`Banned ${member} for ${reason}.`)
                        .setFooter(`Requested by: ${message.author.username}`)
                        .setColor(`#131313`)
                        message.channel.send(done)
                    } else {
                        const ripbotperms = new MessageEmbed()
                        .setAuthor(`${client.user.username}`, `${client.user.displayAvatarURL()}`)
                        .setDescription("This user is either a **Moderator**, **Administrator** or has **some** sort of role higher than mine!")
                        .setColor(`#131313`)
                        message.channel.send(ripbotperms)
                    }
                }
            }
        }

    }
  }
};