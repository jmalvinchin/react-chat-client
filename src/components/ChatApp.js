import React, { useState, useEffect } from 'react';
import MessageThread from './MessageThread'
import MessageSender from './MessageSender'
import WelcomeModal from './shared/WelcomeModal'
import ChatContext from '../context/ChatContext'

function ChatApp(props) {
  const [state, setState] = useState({
    showModal: true,
    name: null,
    messages: []
  });

  useEffect(() => {
    props.cableApp.room = props.cableApp.cable.subscriptions.create("ChatRoomChannel", {
      connected() {
        console.log("Connected now");
      },
      disconnected() {
        console.log("Disconnected now");
      },
      received(data) {
        setState({...state, messages: [...state.messages, data]})
      },
      speak(message) {
        this.perform('speak', { message, name: state.name })
      },
      announce(content) {
        this.perform('announce', { name: content.name, type: content.type })
      }
    })

    return () => {
      window.addEventListener("beforeunload", (e) => {
        console.log("disconnecting");
        e.preventDefault();
        return props.cableApp.room.unsubscribe();
      })
    };
  });

  const onEnter = (name) => {
    setState({...state, showModal: false, name: name})
    props.cableApp.room.announce({name: name, type: "join"})
  };

  return (
    <ChatContext.Provider value={{state, cableApp: props.cableApp}} >
      <div className="content">
        <h1>Chat Room</h1>
        <WelcomeModal
          onEnter={onEnter}
        />
        <MessageThread />
        <MessageSender />
      </div>
    </ChatContext.Provider>
  );
}

export default ChatApp;
