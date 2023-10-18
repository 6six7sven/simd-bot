import { ActionRowBuilder, StringSelectMenuBuilder } from 'discord.js'
import { InteractionMenuId } from "../feature.js";

export default {
    name: InteractionMenuId.RegisterEvent,
    description: 'Register for an upcoming or on-going event',
    async execute(interaction) {
        if(interaction.customId in InteractionMenuId) 
            handleSubmit()

        console.log('event sign up')
        await interaction.deferReply({content:'Fetching Events', ephemeral: true})
        
        const events = await interaction.guild.scheduledEvents.fetch()
            .then(events => events)
            .catch(err => console.log(`Error fetching events: ${err}`))

        const selectMenu = new StringSelectMenuBuilder().setCustomId(InteractionMenuId.RegisterEvent)

        for(const event of events) {
            selectMenu.addOption({
                label: event.name,
                value: event.id
            })
        }

        const arow = new ActionRowBuilder().addComponents(selectMenu)

        await interaction.reply({ 
            content: 'Select the Event you\'d like to register for', 
            components: [arow],
            ephemeral: true
        })
    }
}

function handleSubmit(interaction) {
    await interaction.followup({content: 'Registering you for the event', ephemeral: true}).then(msg => msg.delete())
    
    if(EventConfig.('eventcode')) {
        interaction.guild.channels.fetch()
            .then(channels => channels.find(channel => channel.name === EventConfig.get('eventcode')))
            .then(_ => channel.send('You are now registered for the event'))
            .catch(err => console.log(`Error fetching channel: ${err}`))
        
        
    }

    await interaction.followUp({content: 'You are now registered for the event', ephemeral: true})
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