const ms = require('ms');
module.exports = {
    name: 'tempmute',
    description: "This mutes a member with time",
    execute(message, args) {
        const target = message.mentions.users.first();
        if (target) {
 
            let mainRole = message.guild.roles.cache.find(role => role.name === 'member');
            let muteRole = message.guild.roles.cache.find(role => role.name === 'muted');
 
            let memberTarget = message.guild.members.cache.get(target.id);
 
            if (!args[1]) {
                memberTarget.roles.remove(mainRole.id);
                memberTarget.roles.add(muteRole.id);

               embed = new Discord.MessageEmbed()
               .setTitle(`<@${memberTarget.user.id}> has been muted`)

                message.channel.send(embed);
                return
            }
            memberTarget.roles.remove(mainRole.id);
            memberTarget.roles.add(muteRole.id);
            message.channel.send(`<@${memberTarget.user.id}> has been muted for ${ms(ms(args[1]))}`);
 
            setTimeout(function () {
                memberTarget.roles.remove(muteRole.id);
                memberTarget.roles.add(mainRole.id);
            }, ms(args[1]));
        } else {
            
            embed = new Discord.MessageEmbed()
            .setTitle(`Cant find that member!`)
            
            message.channel.send(embed);
        }
    }
}