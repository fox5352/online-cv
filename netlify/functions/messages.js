import { Client } from "discord.js";

async function botSendMessage(message, token, id) {
  
  const client = new Client({ intents: ["DirectMessages"]});

  try {
    await client.login(token);

    const chanel = await client.channels.fetch(id);
    if (chanel === null) {
      throw new Error(`Couldn't find user with ID ${channel_id}`);
    }
    
    await chanel.send(`@christopher_vos ${message}`);

    await client.destroy();

  } catch (error) {
    console.error(`Bot failed to login or send message: ${error}`);
    await client.destroy();
  }
}


export const handler = async (event, context) => {
  const { message } = await JSON.parse(event.body);
  const discord_Token = process.env.DISCORD_TOKEN;
  const channelId = process.env.CHANNEL_ID;

  try {
    await botSendMessage(message, discord_Token, channelId);

    return {
      body: JSON.stringify({ message: "message successful sent" }),
      statusCode: 200
    };
  } catch (error) {
    return {
      body: JSON.stringify({ message: "message failed to send" }),
      statusCode: 500
    };
  }
};
