var redis=require("redis");

try{
	var client=redis.createClient(6379,'127.0.0.1');
	client.on('error',function(err){
		console.log(err);
	});
	client.on('ready',function(){
		client.publish('test1','I am a test1');
		client.publish('test2','I am a test2');
		client.end();
	});
}

catch(e){
	console.log("Error:"+e);
}
