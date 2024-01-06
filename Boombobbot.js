async function envoyerCoordonnees(latitude, longitude) {
    
    const getMeUrl = `https://api.telegram.org/bot${telegramBotToken}/getMe`;
    const botInfoResponse = await fetch(getMeUrl);
    const botInfo = await botInfoResponse.json();
    const botName = botInfo.result.username;

   
    const apiUrl = `https://api.telegram.org/bot${telegramBotToken}/sendLocation`;
    
    const params = {
        chat_id: chatId,
        latitude: latitude,
        longitude: longitude,
    };

    const urlSearchParams = new URLSearchParams(params);

    try {
        const response = await fetch(`${apiUrl}?${urlSearchParams}`);
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error('Erreur lors de l\'envoi des coordonnées :', error);
    }
}

// Exemple d'utilisation
const latitude = 48.8566;
const longitude = 2.3522;

envoyerCoordonnees(latitude, longitude);
