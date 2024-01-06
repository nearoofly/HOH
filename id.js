const { Telegraf } = require('telegraf');

const botToken = 'VOTRE_TOKEN'; // Remplacez par le token de votre bot

const bot = new Telegraf(botToken);

bot.start((ctx) => {
  const chatId = ctx.chat.id;
  ctx.reply(`L'ID du chat est : ${chatId}`);
});

bot.launch();
