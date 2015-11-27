var express = require('express'),
    router = express.Router(),
    ng = require('nodegrass'),
    http = require('http'),
   testUrl = 'http://test1.uyess.com';

//     testUrl = 'http://cxy.api.uyess.com';
//     testUrl = 'http://lxq.api.uyess.com';
//     testUrl = 'http://lxh.api.uyess.com';
    // testUrl = 'http://chenwei.api.uyess.com';
//     testUrl = 'http://xptest.uyess.com';

router.all('*', function(req, res, next){
    var originUrl = req.originalUrl,
        cookies = req.cookies,
        arr = [],
        method = req.method.toLowerCase();
    
    if (cookies.access_token === undefined) {
        cookies.access_token = 'c924OYrQNE9oGQXR24tC4xtbRopME4j3rqz9RdbAw6xeqkWbKxSF4%2Bi4bSSaDHndmxIFq34decFQImdZH5s4KZX5iWMisv7iUFR7MN9%2BBWa5wLvX';
    }
    // cxy.api cookies
//     cookies.access_token = 'eee4sTyEYfAXF6WVVq9pNCFq2zNlhKUXH6Jhwe7P3KB6VqahMykRRgv5cUfxPndrvy42VcGnj2qITyWlYTKPp%2B9a2PH09Ff4dzwc6kKPrgnLkTDt';

    // lxq.api cookies
//     cookies.access_token = 'eee4sTyEYfAXF6WVVq9pNCFq2zNlhKUXH6Jhwe7P3KB6VqahMykRRgv5cUfxPndrvy42VcGnj2qITyWlYTKPp%2B9a2PH09Ff4dzwc6kKPrgnLkTDt';
    
    // lxh.api cookies
//     cookies.access_token = '1ebahFOUA%2FkEUsIiLPd04%2FreG6lfGp23aoXnMHF6KxALqyIreIyu0GSXvXiQNqoPROXnLJJ4HSxdHcET4tAZOyngMZ%2B11kr5gn82SVZdalcKj7XY';

    // chenwei.api cookies
     // cookies.access_token = 'eee4sTyEYfAXF6WVVq9pNCFq2zNlhKUXH6Jhwe7P3KB6VqahMykRRgv5cUfxPndrvy42VcGnj2qITyWlYTKPp%2B9a2PH09Ff4dzwc6kKPrgnLkTDt';
    
    // xptest.api cookies
//      cookies.access_token = 'e69eTwU2aUoXEGGZyhNREM0RfFUGn4NWIK2GTirNf5XrMkm0fcR4WHR7W6Y6i3U8QbrckGTNVOO%2BUGXCT02OmdBhi1xYPvIJ9oYkIjw%2FJ%2FXEJ7ba';
    
    
    if ( req.xhr || (originUrl.indexOf('.php') > -1 && originUrl.indexOf('.html') === -1) && originUrl.indexOf('post_pay.php') > -1 ) { 
        for (var k in cookies) {
            arr.push(k + '=' + cookies[k]);
        }
        
        ng[method](testUrl + originUrl,function(data,status,headers){
            res.set(headers);
            res.send(data);
//            console.log(headers);
        },{'cookie': arr.join(';')}, req.body,'utf8').on('error', function(e) {
            console.log("Got error: " + e.message);
        });
    } 
    
});

module.exports = router;
