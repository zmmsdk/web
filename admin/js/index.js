// index.js  



$logout.click(function () {
    console.log('页面退出成功');
    // 发请求$.post('地址',参数,回调)
    user.logout(function (res) {
        console.log(res);
        if (res.code === 200) {
            // 退出回到登录页
            location.href = './login.html';
        }
    })
});
// 获取用户信息
// $.get('地址',参数,回调)
user.getUser(function (res) {
    console.log(res);
    if (res.code === 200) {
        $userImg.prop('src', res.data.user_pic)
        $userName.text(res.data.nickname)
    }
});

// 文章搜索
var key,type,state,page,perpage,id;
$search.click(function () { 
    var va = $ipt.val().trim();
    console.log(va);

    $.get('http://localhost:8000/admin/search',{type:va,},function(res){
    console.log(res);
    // if(res.code === 200){
    //     var data = res.data ;
   
    // }
    location.href = '/article_list.html';
});
    
    
});



