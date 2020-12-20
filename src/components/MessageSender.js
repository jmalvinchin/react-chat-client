import React from 'react'

function MessageSender(props) {

  const clickButton = () => {
    props.cableApp.room.speak("Sent a Message");
  }

  return(
    <div className="footer">
      <input type="text" id="message" />
      <button onClick={clickButton}>Send a Message</button>
    </div>
  );
};

export default MessageSender;
