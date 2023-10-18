
export default {
    name: 'register',
    description: 'Register for an upcoming or on-going event',
    async execute(interaction) {
        console.log('event sign up')
        await interaction.deferReply({content:'Fetching Events', ephemeral: true})
        // Fetch Events from Config file destination Events channel


        // Create a SelectMenu
        // dynamic import StringSelectMenuBuilder from discord.js
        const {StringSelectMenuBuilder} = await import('discord.js')
        const selectMenu = new StringSelectMenuBuilder()

        for(const event of events) {
            selectMenu.addOption({
                label: event.name,  
                value: event.id
            })
        }

        const arow = new ActionRowBuilder().addComponents(selectMenu)           

        await interaction.reply({ 
            content: 'Select the Event you\'d like to deregister from', 
            components: [arow],
            ephemeral: true
        })

        await interaction.followup()

    }
}

async function updateEventOptions() {
    
    
    const commandId = client.commands.get('register')?.id
    
    if(commandId) {
        const { Routes } = await import('discord.js');
        const { REST } = await import('@discordjs/rest');

        const rest = new REST({ version: '10' }).setToken(process.env.DISCORD_BOT_TOKEN);


        // Update the command.
        rest.patch(Routes.applicationCommand(process.env.CLIENT_ID, commandId), { body: { options } });
    }
}