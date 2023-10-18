import features from '../../feature/feature.js'
import {SlashCommandBuilder} from 'discord.js'

class BotModuleLoader {
    
    static reloadCommand() {
        return {
            data: new SlashCommandBuilder()
                .setName('reload')
                .setDescription('Reloads all commands'),
            async execute(interaction) {
                console.log('Reloading...')
                
                if(interaction.options.getBoolean('force')) {
                    await forceSyncApplicationCommands()
                } else {
                    load(interaction.client)
                }
                
                interaction.reply({ content: 'Reloaded, else try with force', ephemeral: true })
                console.log('Reloaded')
            }
        }
    }
    
    static SlashCommandBuilderFactory(feature) {
        console.log(feature.name)
        return {
            data: new SlashCommandBuilder()
            .setName(feature.name)
            .setDescription(feature.description),
            execute: feature.execute
        }
    }

    static load(client) {
        console.log('Loading...')
        client.commands.set('reload', this.reloadCommand())

        for(const feature of features) {
            client.commands.set(feature.name, this.SlashCommandBuilderFactory(feature))
        }

        for(const command in client.commands) {
            client.application.commands.create(command.data)
        }
    }

    async forceSyncApplicationCommands() {
        try {
            console.log(`Started refreshing ${client.commands.length} application (/) commands.`);
            client.commands.entries((k,v) => console.log(k,v))
            const data = await rest.put(
                Routes.applicationCommands(process.env.CLIENT_ID),
                {body: client.commands.toJSON()} // toJSON 
            );
    
            console.log(`Successfully reloaded ${data.length} application (/) commands.`);
        } catch (error) {
            console.error(error);
        }
    }
}

export default BotModuleLoader