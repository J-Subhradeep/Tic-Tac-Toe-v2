import React, { useRef, useEffect } from "react";
import { ChatBodyWrapper } from "../styles/chatbody.styled";


const ChatBody = () => {
  const messagesRef = useRef(null);

  useEffect(() => {
    if (messagesRef.current) {
      messagesRef.current.scrollTop = messagesRef.current.scrollHeight;
    }
  }, [messagesRef]);


  return (
   
    <div className="messages" ref={messagesRef}> 
      <ChatBodyWrapper>
        <div className="chat-messages"  >
          <div className="message receiver">
            <div className="content">
              <p>Hello</p>
            </div>
          </div>
          <div className="message sender">
            <div className="content">
              <p>Hi, How are you? I am fine. You?</p>
            </div>
          </div>
          <div className="message receiver">
            <div className="content">
              <p>Hello</p>
            </div>
          </div>
          <div className="message sender">
            <div className="content">
              <p>Hello</p>
            </div>
          </div>
          <div className="message sender">
             <div className="content">
               <p>Hello</p>
             </div>
           </div>

          <div className="message sender">
            <div className="content">
               <p>Hello</p>
            </div>
           </div>
         
           <div className="message sender">
             <div className="content">
               <p>Hello</p>
             </div>
           </div>

           <div className="message sender">
             <div className="content">
               <p>Hi,How are you?I am fine. You?</p>
             </div>
           </div>

          <div className="message receiver">
             <div className="content">
               <p>Hi,How are you?I am fine. You?</p>
             </div>
           </div>
        
        </div>
      </ChatBodyWrapper>
    </div>
   
  );
};

export default ChatBody;