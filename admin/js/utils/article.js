// console.log(123);

// 创建文章列表
var article_list = {
    article_list_first: function (callback) {
        // <!-- 3通过ajax回调函数拿数据 -->
        $.get(`${post_url}${article_url.admin_search}`, function (res) {
            callback(res)

        })
    },
  
}


console.log(123);
