var app = require('http').createServer(handler)
  , io = require('socket.io').listen(app)
  , fs = require('fs');
var redis = require('redis');
var redis_client  = redis.createClient(6379,'127.0.0.1');
app.listen(3000);
function handler (req, res) {
  fs.readFile(__dirname + '/index.html',
  function (err, data) {
    if (err) {
      res.writeHead(500);
      return res.end('Error loading index.html');
    }
 
    res.writeHead(200);
    res.end(data);
  });
}
io.sockets.on('connection', function (socket) {
  socket.emit('news', { hello: 'world' });
      redis_client.subscribe('wangbin_test');
      redis_client.on('message',
        function(channel,message){
             socket.emit('news', message);
             console.log("channel:" + channel + ", msg:"+message);
         }
         );
 
  socket.on('my other event', function (data) {
    console.log(data);
  });
 
});