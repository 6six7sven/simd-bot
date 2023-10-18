export const BASE_URL = "https://api.tatsu.gg/v1";


export const MODIFY_GUILD_MEMBER_POINTS = (guild_id, member_id) => `${BASE_URL}/guilds/${guild_id}/members/${member_id}/points`;

export const GUILD_MEMBER_POINTS = (guild_id, member_id) => `${BASE_URL}/guilds/${guild_id}/members/${member_id}/points`;

export const PROFILE = (user_id) => `${BASE_URL}/users/${user_id}/profile`;