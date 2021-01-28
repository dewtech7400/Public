const Discord = require('discord.js');

module.exports = {
  name: "clear",
  description: "Clears lot's of messages at once",
  run: async(client, message, args) => {

    async function clear() {
      message.delete();

      var purge = Number(args[1])

      if(isNaN(purge)) {
        message.channel.send(`Please provid a number of message to delete!`)
      }
      const fetched = await message.channel.messages.fetch({limit: purge});
      console.log(fetched.size + `messages found.`);

      embed = new Discord.MessageEmbed()
      .setTitle(`I have deleted ${fetched.size} messages!`)

      message.channel.bulkDelete(fetched)
      message.channel.send(embed)
    }
    clear();
  }}
