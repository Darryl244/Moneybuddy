// Get DOM elements
const userInput = document.getElementById("user-input");
const sendBtn = document.getElementById("send-btn");
const chatMessages = document.getElementById("chat-messages");

// Function to display user message in chat
function displayUserMessage(message) {
  const userMessage = document.createElement("div");
  userMessage.classList.add("user-message");
  userMessage.textContent = message;
  chatMessages.appendChild(userMessage);
}

// Function to display bot response in chat
function displayBotResponse(response) {
  const botResponse = document.createElement("div");
  botResponse.classList.add("bot-response");
  botResponse.textContent = response;
  chatMessages.appendChild(botResponse);
}

// Event listener for sending user message
sendBtn.addEventListener("click", () => {
  const message = userInput.value;
  displayUserMessage(message);

  // Call function to handle bot response
  handleBotResponse(message);

  // Clear input field
  userInput.value = "";
});

// Function to handle bot response (replace with your bot logic)
function handleBotResponse(userInput) {
  // Example: Hard-coded bot response
  const botResponse = "Hello! How can I assist you today?";
  displayBotResponse(botResponse);
}
