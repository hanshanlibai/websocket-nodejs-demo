const http = require('http');
const websocket = require('ws');

const server = http.createServer();
const wss = new websocket.Server({server});

//绑定事件，建立连接
wss.on('connection',(socket)=>{
    console.log('websocket已连接');
    //收到客户端发来的消息
    socket.on('message',(message)=>{
        //打印收到的消息
        console.log('收到客户端发来的消息：'+message);
        //收到后返回消息给客户端
        socket.send('hello client, I am server, I received')
    });
    socket.on('close', ()=>{
        console.log('websocket连接已关闭');
    });
});

server.on('request', (request, response)=>{
    response.writeHead(200, {'Content-Type':'text/plain'});
    response.end('Hello,world1111!');
});

server.listen(8888, ()=>{
    console.log('服务已启动，端口号为8888');
});