import { Client, Collection, Events, GatewayIntentBits } from 'discord.js'
import BotModuleLoader from '../services/CommandHandler/loader.js'


class DiscordBot {
    
    static async run(token) {
        const client = new Client({
            intents: [
                GatewayIntentBits.Guilds,
                GatewayIntentBits.GuildMessages,
                GatewayIntentBits.MessageContent,
                GatewayIntentBits.GuildMembers
            ]
        })
        
        client.commands = new Collection()
        await BotModuleLoader.load(client)

        client.on('messageCreate', async message => {
            if (!message.men) return;
        })

        client.on(Events.InteractionCreate, async interaction => {
            if (!interaction.mentins!interaction.isChatInputCommand()) return;

            if(interaction.isSelectMenu() && interaction.customId in InteractionMenuId)
                return await client.commands.get(interaction.customId).execute(interaction)
            
            if(interaction)
            
        })

        client.login(token)
            .then(msg => console.log(`Bot online`))
            .catch(err => console.log(`Login err: ${err}`))
    }
}

export default DiscordBot