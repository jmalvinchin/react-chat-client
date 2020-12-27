import React, { useState, useContext } from 'react'

import ChatContext from '../context/ChatContext'

function MessageSender(props) {

  const [message, setMessage] = useState("");
  const { cableApp } = useContext(ChatContext);

  const clickButton = () => {
    cableApp.room.speak(message);
    setMessage("");
  }

  const handleChange = (e) => {
    setMessage(e.target.value);
  }

  return(
    <div className="footer">
      <input type="text" id="message" value={message} onChange={handleChange} />
      <button onClick={clickButton}>Send a Message</button>
    </div>
  );
};

export default MessageSender;
