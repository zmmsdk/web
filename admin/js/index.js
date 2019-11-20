// index.js  
// 获取元素
var $logout = $('#logout');
console.log($logout);
// 获取用户信息
var $userImg = $(".userImg");
var $userName = $('#userName');



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


