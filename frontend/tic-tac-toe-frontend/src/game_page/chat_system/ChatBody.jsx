import React from "react";
import { ChatBodyWrapper } from "../styles/chatbody.styled";
const ChatBody = () => {
  return (
    <div className="messages" style={{height:'76%',overflow: 'auto' }}>
      <ChatBodyWrapper>
        <div className="chat-messages">
          <div class="message receiver">
            <div className="content">
            
              <p>Hello</p>
             
            </div>
          </div>
          <div class="message sender">
            <div className="content">
             
              <p>Hi,How are you?I am fine. You?</p>
            
            </div>
          </div>
          <div class="message receiver">
            <div className="content">
                <p>Hello</p>
                                     
            </div>
          </div>
          <div class="message sender">
            <div className="content">
                                                                                                                                        
              <p>Hello</p>
              
            </div>
          </div>

          <div class="message sender">
            <div className="content">
              <p>Hello</p>
            </div>
          </div>

          <div class="message sender">
            <div className="content">
              <p>Hello</p>
            </div>
          </div>
         
          <div class="message sender">
            <div className="content">
              <p>Hello</p>
            </div>
          </div>

          <div class="message sender">
            <div className="content">
              <p>Hi,How are you?I am fine. You?</p>
            </div>
          </div>

          <div class="message receiver">
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
