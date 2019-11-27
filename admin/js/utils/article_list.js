// console.log(123);

// 创建文章列表
var article_list = {
    article_li: function (curPage,callback) {
        $.get(article_url.article_search, { totalPages: curPage, page: curPage }, function (res) {
           callback(res)
        })
    },
    article_list_first: function (callback) {
        // <!-- 3通过ajax回调函数拿数据 -->
        $.get(`${article_url.admin_search}`, function (res) {
            callback(res)

        })
    },
    article_delete:function(id,callback){
        $.get(article_url.article_delete, { 'id': id }, function (res) {
       callback(res)

    })
    },
    requery_da :function(callback){
        $.get(article_url.category_search, function (res) {
       callback(res)
    })
       },
    
       re_qu_data:function(type,callback){
        $.get(article_url.article_search, { type: type, }, function(res){
            callback(res)
        })
       },
       requery_page:function(totalPages,curPage,type,callback){
        $.get(article_url.article_search, { totalPages: totalPages, page: curPage, type: type }, function (res) {
           callback(res)
        })
       },
       get_location:function(id,callback){
        $.get(article_url.article_search, { id: id }, function (res) {
           callback(res)
        })
       }
  
}



