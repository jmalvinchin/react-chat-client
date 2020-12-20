import React from 'react'

function Message(props) {
  const {message, sent_by, chat_room_name, type} = props.content

  if(message) {
    return(
      <div>
        <p>{sent_by}</p>
        <p>{message}</p>
      </div>
    )
  } else if(chat_room_name) {
    return(
      <div>
        <p>{chat_room_name} {type === 'join' ? 'joined' : 'left'} the channel</p>
      </div>
    )
  }
};

export default Message;
