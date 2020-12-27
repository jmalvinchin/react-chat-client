import React from 'react'
import classNames from 'classnames'

function Message(props) {
  const {message, sent_by, chat_room_name, type} = props.content
  let messageClass = classNames({
    msg: true,
    announce: chat_room_name != null,
    sent: message != null && sent_by === props.sender,
    received: message != null && sent_by != props.sender,
  })

  if(message) {
    return(
      <div className={messageClass}>
        <p className="sender">{sent_by}</p>
        <p>{message}</p>
      </div>
    )
  } else if(chat_room_name) {
    return(
      <div className={messageClass}>
        <p>{chat_room_name} {type === 'join' ? 'joined' : 'left'} the channel</p>
      </div>
    )
  } else {
    return null;
  }
};

export default Message;
