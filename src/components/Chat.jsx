import '../stylesheets/Chat.css';
const Chat = (props) => {
  return (
      <div className='Chat'>
        
        <div className='Chat_header'>
          <div className='ProfilePic'></div>
          <div>{props.name}</div>
        </div>
        
        <div className='Chat_messages'>
          
        </div>
        
        <div className='Chat_input'>
          <input type='text' value={inputMessage} onChange={handleInputChange} placeholder='Type a message...' />
          <button onClick={handleSendMessage}>Send</button>
        </div>

      </div>
    )
}

export default Chat;

