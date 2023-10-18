const {StringSelectMenuBuilder} = await import('discord.js')

export default {
    name: 'viewevents',
    description: 'Get upcoming and on-going events',
    async execute(interaction) {
        console.log('event list')
        await interaction.deferReply({content:'Fetching Events', ephemeral: true})

        const events = await interaction.guild.scheduledEvents.fetch()
            .then(events => events)
            .catch(err => console.log(`Error fetching events: ${err}`))

        await interaction.followUp({
            content: `Events ${events.length == 1? events: events.reduce((acc, event) => acc + event.name + '\n' , '')}`, 
            ephemeral: true
        })
    }
}