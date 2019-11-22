// user对象
let post_url =   'http://localhost:8000/';
// url后缀参数(用对象提参数和方法)
var last_url = {
    admin_login : 'admin/login',
};

var user ={
    // 登入
    login :function login(user_name,password,callback){
        $.post(`${post_url}${last_url.admin_login}`,{user_name,password},function(res){
                callback(res);
        })
    },
// 登出
    logout: function (callback) {
        $.post(`${post_url}admin/logout`, function (res) {
           callback(res)

        })
    },
    // 获取用户信息
    getUser: function (callback) {
        $.get( `${post_url}admin/getuser`, function (res) {
           callback(res)
        })
    }
}
console.log(a);


