import { v4 as uuidv4 } from "uuid"
import React from 'react'

import Message from './Message'

function MessageThread(props) {

  return (
    <div>
      {props.messages.map(message => {
        return (
          <Message key={uuidv4()} content={message} />
        );
      })}
    </div>
  );
};

export default MessageThread;
