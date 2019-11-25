// 定义一个定时器（故事是从一个定时器开始的）
var timer = setTimeout(function () {
// 监控区
    // 监控api
    // 监控BOM
    // console.log(location);
    // 监控跳转
    console.log(location.href);
    // // 监控端口
    // console.log(location.port);
    // // 监控服务器名称+端口
    // console.log(location.host);
    // // 监控服务器名称
    // console.log(location.hostname);
    // console.log(location.search);
    // // 监控页面名称
    // console.log(location.pathname);
// 判断区
    if(location.href === 'http://127.0.0.1:5500/index.html'){
        console.log('条件异步操作加载成功');    
    }else if( a = 3){
        console.log('456');       
    }
    else if( a = 3){
        console.log('456');       
    }
    // 监控dom
// 处理区
}, 10000)

// 获取元素
$('#span1').text(location.href);
$('#span2').text(location.port);
$('#span3').text(location.hostname);
$('#span4').text(location.pathname);
$('#span5').text(location.host);


