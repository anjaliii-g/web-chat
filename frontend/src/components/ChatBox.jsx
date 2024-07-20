import React from "react";
import Message from "./Message";
import { useState, useRef, useEffect } from "react";
const ChatBox = () => {
  const messagesEndRef = useRef();
  const [messages, setMessages] = useState([]);
  const scrollToBottom = () => {
    messagesEndRef.current.scrollIntoView({ behaviour: "smooth" });
  };
  useEffect(scrollToBottom, [messages]);
  return (
    <div className="pb-44 pt-20 container">
      {messages.map((message, id) => (
        <Message key={id} message={message} />
      ))}
      <div ref={messagesEndRef}></div>
    </div>
  );
};
export default ChatBox;