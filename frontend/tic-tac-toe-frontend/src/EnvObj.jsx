var EnvObj = {
    getRoomCode: "https://api.play-real-tictactoe.cloud/api/unique",
    verifyRoomCode: "https://api.play-real-tictactoe.cloud/api/",
    userWSApiStartingString:`wss://api.play-real-tictactoe.cloud/api/ws/seconduser/`,
    chatWSApiString:`wss://api.play-real-tictactoe.cloud/api/ws/chat/${localStorage.getItem("roomCode")+"_chat/"+localStorage.getItem("symbol")+"/"}`,
    boardApiString:`wss://api.play-real-tictactoe.cloud/api/ws/board/${localStorage.getItem('roomCode')}_board/`
}
export default EnvObj;