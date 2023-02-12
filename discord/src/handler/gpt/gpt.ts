import dotenv from 'dotenv';
import { Interaction, SlashCommandBuilder } from 'discord.js';
import { Configuration, OpenAIApi } from 'openai';

dotenv.config();

const configuration = new Configuration({
  apiKey: process.env.OPENAI_KEY,
});
const openai = new OpenAIApi(configuration);

export const slashCommandAskGpt = new SlashCommandBuilder()
  .setName('ask-gpt')
  .setDescription('Ask ChatGPT anything')
  .addStringOption((option) =>
    option.setName('input').setDescription('your question').setRequired(true)
  );

export const handleCommandAskGpt = async (int: Interaction) => {
  if (!int.isChatInputCommand()) return;

  // The reply may take longer than 3s ( discord limit )
  int.deferReply({ ephemeral: true });

  try {
    const input = int.options.getString('input');

    const completion = await openai.createCompletion({
      model: 'text-davinci-003',
      prompt: input,
      max_tokens: 64,
      temperature: 0,
      top_p: 1.0,
      presence_penalty: 0,
      frequency_penalty: 0,
    });

    int.followUp(completion.data.choices[0]?.text || 'No response');
  } catch (error) {
    console.log(error);
    int.followUp('Error');
  }
};
