const ChatRoom = require("./chatRoom.js")
const chat = new ChatRoom()

chat.on("join" , (user) =>{
    console.log(`${user} join the chat`);
})
chat.on("message" , (user , message) =>{
    console.log(`${user}: ${message}`);
})
chat.on("leave" , (user) =>{
    console.log(`${user} left the chat`);
})
chat.join('Alex')
chat.join('Madx')

chat.sendMessage('Alex' , 'Hey Madx how are you');
chat.sendMessage('Madx' , 'Hey Alex , Im Fine .. how are you');

chat.leave('Alex')
chat.sendMessage('Alex' , 'This msg wonts send because u left')
chat.leave('bob')