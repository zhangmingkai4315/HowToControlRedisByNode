// var redis=require("redis");
// var client=redis.createClient(6379,'127.0.0.1');
// client.on('error',function(err){
// 	console.log('ERROR'+err);
// });

// client.set('color','red',redis.print);
// client.get('color',function(err,value){
// 	if(err) throw err;
// 	console.log('Got:'+value);
// });

// client.hmset('camping',{
// 	'shelter':'2-person tent',
// 	'cooking':'campstove'
// },redis.print);

// client.hget('camping','cooking',function(err,value){
// 	if(err) throw err;
// 	console.log('will cooking with :'+value);
// });

// client.hkeys('camping',function(err,keys){
// 	if(err) throw err;
// 	keys .forEach(function(key,i){
// 		console.log(' '+key);
// 	});
// });


// client.lpush('tasks','Paint the bike red',redis.print);
// client.lpush('tasks','Paint the bike green',redis.print);
// client.lrange('tasks',0,-1,function(err,items){
// 	if(err) throw err;
// 		items.forEach(function(item,i){
// 			console.log(" "+item);
// 		});
// });


// client.sadd('ip_addresses','204.10.37.96',redis.print);
// client.sadd('ip_addresses','204.10.37.95',redis.print);
// client.sadd('ip_addresses','72,32,231,8',redis.print);

// client.smembers('ip_addresses',function(err,members){
// 	if(err) throw err;
// 	console.log(members);
// });



// var redis=require('redis');
// var client=redis.createClient(6379,'127.0.0.1');

// client.on("error",function(err){
// 	console.log('Error'+err);
// });

// var user={
// 	userName:'Jondos',
// 	firstName:'Jone',
// 	lastname:'Doe',
// 	email:'john@johndoe.com',
// 	website:'Http://www.johndoe.com'
// };
// console.log('Setting user hash');
// client.hmset("user",user);
// client.hkeys("user",function(err,replies){
// 	console.log("Results for user:");
// 	console.log(replies.length+" replies");
// 	replies.forEach(function(reply,i){
// 		console.log(i+":"+reply);
// 	});
// 	client.end();
// });



// redis 安全性：
// 1. 配合配置文件中的：
// requirepass hidengoseke 
//由于redis的高效，需要防止暴力攻击的强力密码才可以
// 当在node中使用时需要调用：
// client.auth("hidengoseke");

//2. bind 127.0.0.1 只允许本地的访问

//3. 关闭config 命令，不要使用户可以访问
