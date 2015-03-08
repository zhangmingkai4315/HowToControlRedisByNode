# HowToControlRedisByNode

# how to set data in redis

> set server.ip "192.168.1.1"
OK
> get server.ip
"192.168.1.1"

> set connections 10
OK
> incr connections
(integer) 11
> del connections
(integer) 1
> get connections
(nil)
> incr connections
(integer) 1
> get connections
"1"


# set data expire time and check ttl 

> set resource:lock "redis demo"
OK
> expire resource:lock 10
(integer) 1
> get resource:lock
"redis demo"
> get resource:lock
(nil)
> ttl resource:lock
(integer) -2

# list operation 

> rpush friends "Alice"
(integer) 1
> rpush friends "bob"
(integer) 2
> Lpush friends "sam"
(integer) 3

> Lrange friends 0 -1
1) "sam"
2) "Alice"
3) "bob"

> llen friends
(integer) 3
> lpop friends
"sam"
> rpop friends
"bob"
> llen friends
(integer) 1
> Lrange friends 0 -1
1) "Alice"

# set operation 

> sadd superpowers "flight"
(integer) 1
> sadd superpowers "x-ray vision"
(integer) 1
> sadd superpowers "relexes"
(integer) 1
> sadd superpowers "flight"
(integer) 0



> srem superpower "x-ray vision"
0

> smembers superpowers
1) "relexes"
2) "x-ray vision"
3) "flight"
> sismember superpowers "flight"
(integer) 1



> sadd birdpowers "pecking"
(integer) 1
> sadd birdpowers "flight"
(integer) 1
> sunion birdpowers superpowers
1) "pecking"
2) "relexes"
3) "x-ray vision"
4) "flight"


# sorted set 添加单个元素

redis> ZADD page_rank 10 google.com
(integer) 1

# 添加多个元素

redis> ZADD page_rank 9 baidu.com 8 bing.com
(integer) 2

redis> ZRANGE page_rank 0 -1 WITHSCORES
1) "bing.com"
2) "8"
3) "baidu.com"
4) "9"
5) "google.com"
6) "10"

# 添加已存在元素，且 score 值不变

redis> ZADD page_rank 10 google.com
(integer) 0

redis> ZRANGE page_rank 0 -1 WITHSCORES  # 没有改变
1) "bing.com"
2) "8"
3) "baidu.com"
4) "9"
5) "google.com"
6) "10"

# 添加已存在元素，但是改变 score 值

redis> ZADD page_rank 6 bing.com
(integer) 0

redis> ZRANGE page_rank 0 -1 WITHSCORES  # bing.com 元素的score值被改变
1) "bing.com"
2) "6"
3) "baidu.com"
4) "9"
5) "google.com"
6) "10"

# Hash operation! 

redis 127.0.0.1:6379> hset user:1000 name "Jone Smith"
(integer) 1
redis 127.0.0.1:6379> hset user:1000 email "jone@gmail.com"
(integer) 1
redis 127.0.0.1:6379> hset user:1000 password  "123456"
(integer) 1
redis 127.0.0.1:6379> hgetall user:1000
1) "name"
2) "Jone Smith"
3) "email"
4) "jone@gmail.com"
5) "password"
6) "123456"


redis 127.0.0.1:6379> hmset user:1001 name "mary jones" password "hidden" email
OK
redis 127.0.0.1:6379> hgetall user:1001
1) "name"
2) "mary jones"
3) "password"
4) "hidden"
5) "email"
6) "mjones@example.com"

redis 127.0.0.1:6379> hget user:1001 name 
"mary jones"

redis 127.0.0.1:6379> hset user:1000 visits 10
(integer) 1
redis 127.0.0.1:6379> hgetall user:1000
1) "name"
2) "Jone Smith"
3) "email"
4) "jone@gmail.com"
5) "password"
6) "123456"
7) "visits"
8) "10"
redis 127.0.0.1:6379> hincrby user:1000 visits 1
(integer) 11
redis 127.0.0.1:6379> hincrby user:1000 visits 10
(integer) 21




