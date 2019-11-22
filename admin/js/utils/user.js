var user ={
    // 登入
    login :function login(user_name,password,callback){
        $.post(`${post_url}${last_url.admin_login}`,{user_name,password},function(res){
                callback(res);
        })
    },
// 登出
    logout: function (callback) {
        $.post(`${post_url}${last_url.admin_logout}`, function (res) {
           callback(res)

        })
    },
    // 获取用户信息
    getUser: function (callback) {
        $.get( `${post_url}${last_url.admin_getuser}`, function (res) {
           callback(res)
        })
    }
}



