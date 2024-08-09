import '../stylesheets/Chat.css';
import { useState } from "react";

const Chat = (props) => {
  const [inputMessage, setInputMessage] = useState("");

  const handleChange = (event) => {
    setInputMessage(event.target.value);
  };

  const handleSendMessage = () => {
    console.log("Sending message:", inputMessage);
    setInputMessage("");
  };

  return (
    <div className='Chat'>
      <div className='Chat_header'>
        <div className='ProfilePic'></div>
        <div>{props.name}</div>
      </div>
      
      <div className='Chat_messages'>
        {/* Add logic to display messages */}
      </div>
      
      <div className='Chat_input'>
        <input 
          type='text' 
          value={inputMessage} 
          onChange={handleChange} 
          placeholder='Type a message...' 
        />
        <button onClick={handleSendMessage}>Send</button>
      </div>
    </div>
  );
};

export default Chat;