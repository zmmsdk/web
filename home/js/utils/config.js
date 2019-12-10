// 基地址
let baseUrl = 'http://localhost:8000/';

// 列出所有用到的接口的地址
let APIURLS = {
    category_show: baseUrl + 'category',
    article_show: baseUrl + 'search',

    // 最新资讯
    article_pai: baseUrl + 'latest',
 
    comment_add: baseUrl + 'post_comment',
    comment_get: baseUrl + 'get_comments',


    // 一周热门排行
    rank:baseUrl + 'rank',
    // 最新评论
    latest_comment:baseUrl + 'latest_comment',
    // 发表评论
    sub_comment:baseUrl + 'post_comment',
    // 评论列表
    li_comment:baseUrl + 'get_comments',


    // 获取文章详情
    article_detail: baseUrl + 'search',


    article_search:baseUrl +'search',

    category_search:baseUrl +'category',

    // 用户注册
    user_register: baseUrl + 'adduser',

    // 用户登录
    user_login:baseUrl + 'user_login',

    // 检查是否登录
    if_login:baseUrl +'checklogin',
    // 退出登录
    logout_login:baseUrl +'quit',
 
 }
 // article_list页面接口
// let article_url = {
//     admin_search : baseUrl +'admin/search ' ,
//     // article_search:baseUrl +'admin/search',
//     article_delete:pbaseUrl +'article_delete',
//     category_search:pbaseUrl +'admin/category_search',
// }


