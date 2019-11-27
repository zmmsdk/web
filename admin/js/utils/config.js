// 项目接口配置文件
// user对象
let post_url = 'http://localhost:8000/';
// url后缀参数(用对象提参数和方法)
var last_url = {
    admin_login: 'admin/login',
    admin_logout: 'admin/logout',
    admin_getuser: 'admin/getuser',
};

var article = {

    article_url: post_url,
    // 文章数量统计
    admin_article_count: 'admin/article_count',
    // 评论数量统计
    admin_comment_count: 'admin/comment_count',
    // 月新增文章数
    admin_month_article_count: 'admin/month_article_count',
    // 各类型文档数量统计
    admin_article_category_count: 'admin/article_category_count',
    // 月文章访问量
    admin_article_category_visit: 'admin/article_category_visit',

}


// article_list页面接口
var article_url = {
    admin_search : 'admin/search ' ,
}

// article_category.html页面接口
var category = {
    cata_url:post_url +'admin/category_search',
    requery:post_url +'admin/category_add',
    cate_edit:post_url +'admin/category_edit',
    cate_delete:post_url +'admin/category_delete',
    re_data:post_url +'admin/category_search',
}