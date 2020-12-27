import React, { useRef, useContext } from 'react'

import ChatContext from '../../context/ChatContext'

function WelcomeModal(props) {
  const nameInput = useRef(null);

  const onSubmit = () => {
    props.onEnter(nameInput.current.value);
  }

  const { state } = useContext(ChatContext)

  if (state.showModal) {
    return(
      <div className='modal' style={{display: "block"}}>
        <div className='modal-content'>
          <h3>Welcome to the Chat Room</h3>
          <h5>What is your name?</h5>
          <input type="text" ref={nameInput} className="name" name="name" /><br />
          <button onClick={onSubmit}>Enter!</button>
        </div>
      </div>
    );
  }
  return null;
};

export default WelcomeModal;
