 // 
 $.ajax({
    type: 'get',
    url: APIURLS.if_login,
    success(res) {
        console.log(res);
        // 已登录

        if (res.code === 200) {
            // 已登陆
            $('#formArea').show()
            $('#logout').show()
            $('#linkArea').hide()
            $('#register').hide()

            // 显示用户名
            $('#txt_name').text(res.loginname)
        } else {
            // 已退出
            $('#formArea').hide()
            $('#linkArea').hide()
            $('#logout').hide()
            $('#register').show()

        }

    },
    crossDomain: true,
    xhrFields: {
        withCredentials: true
    },
})

// 退出
$('#logout').click(() => {

    $.ajax({
        url: APIURLS.logout_login,
        type: 'get',
        success(res) {
            // if (res.code === 200) {
            location.href = "./login.html"
            // }
        },
        crossDomain: true,
        xhrFields: {
            withCredentials: true
        },
    })
})