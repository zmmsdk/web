// index.js  
// 获取元素
var $logout = $('#logout');
console.log($logout);
// 获取用户信息
var $userImg = $(".userImg");
var $userName = $('#userName');
// 获取总文章数和日更新文章数
var $all_count =$('#all_count');
var $day_count = $('#day_count');
console.log($all_count,$day_count);


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

// 文章数量统计
$.get('http://localhost:8000/admin/article_count',function(res){
    console.log(res);
    if(res.code === 200){
        $all_count.text(res.data.all_count) ;
        $day_count.text(res.data.day_count);
    }
});
