import type { APIRoute } from "astro";
import ky from "ky";

type DiscordData = {
  data: {
    discord_user: {
      id: string;
      username: string;
      avatar: string;
      discriminator: string;
      clan: {
        tag: string | null;
        identity_guild_id: string;
        badge: string | null;
        identity_enabled: boolean;
      };
      avatar_decoration_data: null;
      bot: boolean;
      global_name: string;
      display_name: string;
      public_flags: number;
    };
    activities: {
      id: string;
      name: string;
      type: number;
      state: string;
      emoji: {
        id: string;
        name: string;
        animated: boolean;
      };
      created_at: number;
    }[];
    discord_status: string;
    active_on_discord_web: boolean;
    active_on_discord_desktop: boolean;
    active_on_discord_mobile: boolean;
    listening_to_spotify: boolean;
    spotify: null;
  };
  success: boolean;
};
const DISCORD_ID = "852656702037164053";

export const GET: APIRoute = async () => {
  try {
    const discordData = await ky
      .get("https://api.lanyard.rest/v1/users/" + DISCORD_ID)
      .json<DiscordData>();

    const discordAvatar = `https://cdn.discordapp.com/avatars/${DISCORD_ID}/${discordData.data.discord_user.avatar}.png?size=1024`;

    return new Response(
      JSON.stringify({
        status: discordData.data.discord_status,
        activities: discordData.data.activities,
        avatar: discordAvatar,
        username: discordData.data.discord_user.username,
        displayName: discordData.data.discord_user.display_name,
      }),
      { headers: { "Content-Type": "application/json" } },
    );
  } catch (error) {
    return new Response(
      JSON.stringify({
        status: "offline",
        activities: [],
        avatar: `https://cdn.discordapp.com/avatars/852656702037164053/d6fc243824654ac0a4fdb7b23252e506.webp?size=128`,
        username: "unknown",
        displayName: "Unknown",
      }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      },
    );
  }
};
