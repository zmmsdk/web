// console.log(123);

// 创建文章列表
let article_list = {
    article_li: function (curPage,callback) {
        $.get(APIURLS.article_search, { totalPages: curPage, page: curPage }, function (res) {
           callback(res)
        })
    },

    re_qu_dt: function ( callback) {
        $.get( APIURLS.article_search,  function (res) {
            callback(res)
        })
    },
    requery_da: function (callback) {
        $.get( APIURLS.category_search, function (res) {
            callback(res)
        })
    },

    re_qu_data: function (type, callback) {
        $.get( APIURLS.article_search, { type: type, }, function (res) {
            callback(res)
        })
    },
    requery_page: function (totalPages, curPage, type, callback) {
        $.get( APIURLS.article_search, { totalPages: totalPages, page: curPage, type:type }, function (res) {
            callback(res)
        })
    },
    //    get_location:function(id,callback){
    //     $.get(article_url.article_search, { id: id }, function (res) {
    //        callback(res)
    //     })
    //    }

}



