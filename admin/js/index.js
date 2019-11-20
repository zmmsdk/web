// index.js  
// 获取元素
var $logout = $('#logout');
console.log($logout);
$logout.click(function () { 
    
    console.log('页面退出成功');
    // 发请求$.post('地址',参数,回调)
    $.post('http://localhost:8000/admin/logout',function(res){
        console.log(res);
        if(res.code === 200){
            // 退出回到登录页
            location.href = './login.html';
        }
        
    })

    
});








