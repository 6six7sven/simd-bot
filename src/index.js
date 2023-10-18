import 'dotenv-safe/config.js'

import DiscordBot from './application/bot.js'

DiscordBot.run(
    process.env.DISCORD_BOT_TOKEN
)