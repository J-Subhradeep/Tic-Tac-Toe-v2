import styled from "styled-components"
export const ChatWrapper = styled.div`
* {
    box-sizing: border-box;
}

body {
    font-family: Arial, Helvetica, sans-serif;
}
.open-button {

    color: white;
    padding: 16px 20px;
    border: none;
    border-radius: 25%;
    cursor: pointer;
    opacity: 0.8;
    position: fixed;
    bottom: 23px;
    right: 28px;
    width: 6rem;
}

.chat2{
    height: 4px;
}

.cancel {
    float: right;
    cursor: pointer;
    opacity:0.8;
    width: 22px;
    height: 22px;
}

.chat-popup {
    display: none;
    position: fixed;
    bottom: 0;
    right: 15px;
    border: 3px solid #000000;
    z-index: 9;
    height:450px;
    background-color: white;
}

.strip{
    background-color: #ba61f5d2;
}
.chat2{
    margin-top: 20px;
}
.heading{
    display:flex;
    justify-content: center;
    justify-items: center;
}

.form-container {
    max-width: 300px;
    padding: 5px 10px;
    background-color: white;
}


.form-container textarea {
    width: 80%;
    padding: 15px;
    margin: 5px 0 22px 0;
    border: none;
    background: #f1f1f1;
    resize: none;
    min-height: 10px;
    
}


.form-container textarea:focus {
    background-color: #ddd;
    outline: none;
}

.send{
    border-radius: 100%;
    height: 60px;
}
.form-container .btn {
    padding: 0;
    border-radius: 100%;
    border: none;
    cursor: pointer;
    width: fit-content;
    /* margin-bottom: 15px; */
    float:right;
}


.form-container .btn:hover,
.open-button:hover {
    opacity: 1;
}

.lower-strip{
    display:flex;
}

.msg-container{
  border: 2px solid #dedede;
  background-color: #f1f1f1;
  border-radius: 5px;
  padding: 10px;
  margin: 10px 0;
}
.darker {
  border-color: #ccc;
  background-color: #e6b7f5;
}

.msg-container::after {
  content: "";
  clear: both;
  display: table;
}

.msg-container img {
  float: left;
  max-width: 60px;
  width: 100%;
  margin-right: 20px;
  border-radius: 50%;
}

.msg-container img.right {
  float: right;
  margin-left: 20px;
  margin-right:0;
}

.time-right {
  float: right;
  color: #aaa;
}

.time-left {
  float: left;
  color: #999;
}
`
