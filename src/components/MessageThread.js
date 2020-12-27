import { v4 as uuidv4 } from "uuid"
import React, { useContext } from 'react'

import Message from './Message'
import ChatContext from '../context/ChatContext'

function MessageThread(props) {

  const { state } = useContext(ChatContext)

  return (
    <div>
      {state.messages.map(message => {
        return (
          <Message key={uuidv4()} content={message} sender={state.name} />
        );
      })}
    </div>
  );
};

export default MessageThread;
