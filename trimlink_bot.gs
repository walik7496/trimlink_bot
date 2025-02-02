var apiToken = "token";
var appUrl = "url";
var apiUrl = "https://api.telegram.org/bot" + apiToken;

// Set the Webhook URL for the bot
function setWebhook() {
  var url = apiUrl + "/setWebhook?url=" + appUrl;
  var response = UrlFetchApp.fetch(url);
  Logger.log(response.getContentText());
}

// Handle incoming messages from the bot
function doPost(e) {
  try {
    var data = JSON.parse(e.postData.contents);
    var chatId = data.message.chat.id;
    var text = data.message.text;

    if (text.startsWith("/shorten")) {
      var urlToShorten = text.substring(9).trim();
      if (!isValidUrl(urlToShorten)) {
        sendMessage(chatId, "Please provide a valid URL to shorten.");
        return;
      }

      var shortUrl = shortenUrl(urlToShorten);
      sendMessage(chatId, `✅ Shortened URL: ${shortUrl}`);
    } else {
      sendMessage(chatId, "I don't understand. Try using /shorten <url>");
    }
  } catch (error) {
    Logger.log("Error: " + error.message);
  }
}

// Function to validate URL
function isValidUrl(url) {
  var regex = /^(https?:\/\/[^\s]+)/;
  return regex.test(url);
}

// Function to shorten URL using TinyURL
function shortenUrl(url) {
  var apiEndpoint = "http://tinyurl.com/api-create.php?url=" + encodeURIComponent(url);
  var response = UrlFetchApp.fetch(apiEndpoint);
  return response.getContentText(); // The shortened URL returned by TinyURL
}

// Send a message to the user via Telegram
function sendMessage(chatId, text) {
  var url = apiUrl + "/sendMessage?chat_id=" + chatId + "&text=" + encodeURIComponent(text);
  UrlFetchApp.fetch(url);
}

