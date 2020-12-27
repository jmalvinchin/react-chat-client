import React, { createContext } from 'react';

const ChatContext = createContext({
  state: {
    showModal: true,
    name: null,
    messages: []
  },
  setState: () => {}
});

export default ChatContext;
