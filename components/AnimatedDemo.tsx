'use client';
import React, { useState, useEffect } from 'react';
import { Modal, ModalBody, ModalContent } from '@/components/ui/AnimatedModal';
import { motion } from 'framer-motion';

export function AnimatedModalDemo({}) {
  // State to store chat messages
  const [messages, setMessages] = useState([
    { id: 1, text: "Holla!", sender: 'bot', button: false },
    { id: 2, text: "I'm Surá Bot. I'm here to help you with any questions you might have about Sura's work.", sender: 'bot', button: false },
    { id: 3, text: "How can I help you today?", sender: 'bot', button: false },
  ]);

  // State to track when all bot messages are rendered
  const [allBotMessagesRendered, setAllBotMessagesRendered] = useState(false);

  // Effect to trigger once all bot messages have been rendered
  useEffect(() => {
    const lastBotMessage = messages[messages.length - 1];
    if (lastBotMessage && lastBotMessage.sender === 'bot') {
      // Wait for the last bot message to be rendered, then allow follow-up options to appear
      const delay = messages.length * 0.3 * 1000; // delay based on message count
      setTimeout(() => {
        setAllBotMessagesRendered(true);
      }, delay + 500); // Add a small buffer after last message is shown
    }
  }, [messages]);

  // Function to handle "We'd like to hire you" click
  const handleHireClick = () => {
    const newMessages = [
      { id: messages.length + 1, text: "We'd like to hire you", sender: 'user', button: false },
      { id: messages.length + 2, text: "Okay, great!", sender: 'bot', button: false },
      { id: messages.length + 3, text: "Send me a message and let's chat further!", sender: 'bot', button: false },
      { id: messages.length + 4, text: "Send message", sender: 'bot', button: true },
    ];
    setMessages([...messages, ...newMessages]);
    setAllBotMessagesRendered(false); // reset the state for next sequence
  };

  // Function to handle "Just saying hello!" click
  const handleHelloClick = () => {
    const newMessages = [
      { id: messages.length + 1, text: "Just saying hello!", sender: 'user', button: false },
      { id: messages.length + 2, text: "Hello!", sender: 'bot', button: false },
      { id: messages.length + 3, text: "Thanks for saying hi 😁", sender: 'bot', button: false },
    ];
    setMessages([...messages, ...newMessages]);
    setAllBotMessagesRendered(false); // reset the state for next sequence
  };
  const handleSendMessageClick = () => {
    window.location.href = "https://mail.google.com/mail/?view=cm&fs=1&to=suraabdisa2019@gmail.com&su=Interested%20in%20hiring&body=Hello%2C%20I%27d%20like%20to%20discuss%20your%20work.";
  };
  

  return (
    <div className="flex items-center justify-center">
      <Modal>
        <ModalBody>
          <ModalContent className="overflow-y-scroll">
            <div className="ui-sans-medium flex flex-col gap-3">
              {/* Display all messages with motion animations */}
              {messages.map((message, index) => (
                <motion.div
                  key={message.id}
                  className={`${message.sender === 'bot' ? (message.button ? 'border-2 border-neutral-800 bg-none cursor-pointer' : 'bot-message') : 'user-message-bg self-end'} py-3 px-4 rounded-md w-fit`}
                  initial={{ opacity: 0, y: 10 }} // Start hidden and slightly below
                  animate={{ opacity: 1, y: 0 }} // Animate to fully visible and in place
                  transition={{ duration: 0.8, delay: index * 0.3 }} // Staggered delay based on index
                  onClick={message.button ? handleSendMessageClick : () =>{}}
                >
                  {message.text}
                </motion.div>
              ))}

              {/* Display initial options if no user interaction has occurred yet */}
              {messages.length === 3 && allBotMessagesRendered && (
                <motion.div
                  className="flex flex-col gap-3"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <motion.div
                    className="border-2 border-neutral-800 py-3 px-4 rounded-md w-fit cursor-pointer"
                    onClick={handleHireClick}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.9 }}
                  >
                    We&apos;d like to hire you
                  </motion.div>
                  <motion.div
                    className="border-2 border-neutral-800 py-3 px-4 rounded-md w-fit cursor-pointer"
                    onClick={handleHelloClick}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 1.2 }}
                  >
                    Just saying hello!
                  </motion.div>
                </motion.div>
              )}

              {/* Display follow-up options after user interaction */}
              {messages.some((msg) => msg.sender === 'user') && allBotMessagesRendered && (
                <motion.div
                  className="flex flex-col gap-3"
                >
                  <motion.div
                    className="border-2 border-neutral-800 py-3 px-4 rounded-md w-fit cursor-pointer"
                    onClick={handleHireClick}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0 }}
                  >
                    We&apos;d like to hire you
                  </motion.div>
                  <motion.div
                    className="border-2 border-neutral-800 py-3 px-4 rounded-md w-fit cursor-pointer"
                    onClick={handleHelloClick}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                  >
                    Just saying hello!
                  </motion.div>
                </motion.div>
              )}
            </div>
          </ModalContent>
        </ModalBody>
      </Modal>
    </div>
  );
}
