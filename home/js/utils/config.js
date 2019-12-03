// 基地址
let baseUrl = 'http://localhost:8000/';

// 列出所有用到的接口的地址
var APIURLS = {
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
 
 }