var redis=require('redis');
var client=redis.createClient(6379,'192.168.2.165');
client.on('error',function(err){
	console.log('Error '+err);
});

client.set('color','red',redis.print);
client.get('color',function(err,value){
	if(err) throw err;
	console.log('color='+value);
});

client.hmset('camping',{
	'shelter':'2-men-tent',
	'cooking':'campstove'
},redis.print);
client.hget('camping','cooking',function(err,value){
	if(err) throw err;
	console.log('camping='+value);
});

client.hkeys('camping',function(err,keys){
	if(err) throw err;
	keys.forEach(function(key,i){
		console.log(' '+key);
	});
});

// var net=require('net');
// var redis=require('redis');
// var server=net.createServer(function(socket){
// var subscriber;
// var publisher;
// socket.on('connect',function(){
// 	subscriber=redis.createClient();
// 	subscriber.subscribe('main_chat_room');
// 	subscriber.on('message',function(channel,message){
// 		socket.write('Channel '+channel+':'+message);
// 	});
// 	publisher=redis.createClient();
// });
// socket.on('data',function(data){
// 	publisher.publish('main_chat_room',data);

// });
// socket.on('end',function(){
// 	subscriber.unsubscribe('main_chat_room');
// 	subscribe.end();
// 	publisher.end();
// });

// });

// server.listen(3000);

