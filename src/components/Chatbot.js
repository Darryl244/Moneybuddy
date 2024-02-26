import React, { useState } from "react";
import "./Chatbot.css"; // Import your CSS file

const Chatbot = () => {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);

  const responses = {
    hello: "Hi there! How can I assist you today?",
    "how are you": "I'm doing well, thank you for asking.",
    "what is moneybuddy": "MoneyBuddy is a financial assistance website.",
    "what are the features":
      "Expense Tracking, Financial Goal Setting, Bill Splitting.",
    "what is expense tracking":
      "Users can effortlessly link their bank accounts and credit cards to automatically track transactions",
    "what is financial goal":
      "Users can define short-term and long-term financial goals, such as saving for a vacation or reducing debt.",
    "what is bill splitting":
      "Simplify shared financial responsibilities by creating groups for roommates, friends, or family.",
    // Add more responses as needed
  };

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim() === "") return;
    const normalizedInput = input.toLowerCase(); // Normalize input to lowercase
    setMessages([...messages, { text: input, sender: "user" }]);
    const response =
      responses[normalizedInput] || "Sorry, I didn't understand that.";
    setMessages([...messages, { text: response, sender: "bot" }]);
    setInput("");
  };

  const handleClearChat = () => {
    setMessages([]);
  };

  return (
    <div className="chatbot-container">
      <div className="messages">
        {messages.map((message, index) => (
          <div key={index} className={`message ${message.sender}`}>
            {message.text}
          </div>
        ))}
      </div>
      <form className="input-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Type your message..."
          value={input}
          onChange={handleInputChange}
        />
        <button type="submit">Send</button>
      </form>
      <button className="clear-button" onClick={handleClearChat}>
        Clear
      </button>
    </div>
  );
};

export default Chatbot;
