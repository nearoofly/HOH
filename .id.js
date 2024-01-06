const { Telegraf } = require('telegraf');

const botToken = '6946239446:AAFiBIb8q_McPJJugBX0Qr2RcgLHU894Cws';

const bot = new Telegraf(botToken);

bot.start((ctx) => {
  const chatId = ctx.chat.id;
  ctx.reply(`L'ID du chat est : ${chatId}`);
});

bot.launch();
