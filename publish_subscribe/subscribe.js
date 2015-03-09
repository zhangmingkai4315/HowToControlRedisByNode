var redis=require("redis");

try{
	var client=redis.createClient(6379,'127.0.0.1');
	client.on('error',function(err){
		console.log(err);
	});
	client.on('ready',function(){
		client.subscribe('test1');
		client.subscribe('test2');
		//clend();ient.
	});
	client.on('subscribe',function(channel,count){
		console.log('Channel:'+channel+", subscribe count:"+count);
	});
	client.on('message',function(channel,message){
		console.log('Channel:'+channel+" "+message);
	});
	client.on('unsubscribe',function(channel,count){
		console.log("Channel:"+channel+", unsubscribe count:"+count);
	});

}

catch(e){
	console.log("Error:"+e);
}
