const Discord = require("discord.js")
module.exports = {
  name: "unban",
  description: "Unban the user",
  args: true,
  usage: "(member) [reason]",
  execute(message, args) {
    const msg = message
    const client = message.client
            msg.guild.fetchBans().then(m => {
    if(args[0] !== null) {
                const user_member = m.find(m => m.user.id === `${args[0]}`)

                if(user_member) {
                    msg.delete()
                    const member = msg.guild.members.unban(user_member.user.id)
                    msg.channel.send({ title: { title: "DONE", description: `This user is unbanned` }}).then(m => {
                        // m.delete({timeout: 5000})
                    })
                } else {
                    msg.delete()
                    msg.channel.send({ embed: { title: "No", description: `This user is unbanned already`}}).then(m => {
                        // m.delete({timeout: 5000})
                    })
                }
            } else {
                msg.delete()
                msg.channel.send(`${msg.author}: Please specify a user id you want to unban`).then(m => {
                    // m.delete({timeout: 5000}).catch(() => undefined)
                })
            }
            })
  }
};