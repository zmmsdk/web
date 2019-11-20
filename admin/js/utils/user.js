// user对象
var post_url =   'http://localhost:8000/';
var user ={
    login :function login(user_name,password,callback){
        $.post(`${post_url}admin/login`,{user_name,password},function(res){
                callback(res);
        })
    },

    logout: function () {
        $.post('http://localhost:8000/admin/logout', function (res) {
            console.log(res);
            if (res.code === 200) {
                // 退出回到登录页
                location.href = './login.html';
            }

        })
    }
}


