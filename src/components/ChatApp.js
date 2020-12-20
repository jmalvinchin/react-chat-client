import React, { useState, useEffect } from 'react';
import MessageThread from './MessageThread'
import MessageSender from './MessageSender'
import WelcomeModal from './shared/WelcomeModal'

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
      received(data) {
        setState({...state, messages: [...state.messages, data]})
      },
      speak(message) {
        this.perform('speak', { message, name: "lalala" })
      },
      announce(content) {
        this.perform('announce', { name: content.name, type: content.type })
      }
    })
  });

  const onEnter = (name) => {
    setState({...state, showModal: false, name: name})
    props.cableApp.room.announce({name: name, type: "join"})
  };

  return (
    <>
    <div className="content">
      <h1>Chat Room</h1>
      <WelcomeModal
        show={state.showModal}
        onEnter={onEnter}
      />
      <MessageThread messages={state.messages} />
    </div>
    <MessageSender cableApp={props.cableApp} />
    </>
  );
}

export default ChatApp;