export default {
    name: 'distributepoints',
    description: 'Distribute points to eligible participants',
    async execute(interaction) {
        console.log('distributing points')
        await interaction.deferReply({content:'Fetching Eligible Members', ephemeral: true})

        // Fetch Eligible Members based on streak count of Event start to end date length
        const eligibleMembers = await interaction.guild.members.fetch({withPresences: true})
            .then(members => members)
            .catch(err => console.log(`Error fetching eligible members: ${err}`))
        
        
        
        await interaction.followUp({content: "List of eligible "})
    }
}