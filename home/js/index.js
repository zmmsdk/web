var index_search={
 
    category_show:(callback) =>{
        $.get(APIURLS.category_show,
            
            function(res){
            callback(res)
        })
    },
    in_search:callback =>{
        $.get( APIURLS.article_show,{
            perpage: 5,
            state: '已发布'
        },res=>{
           callback(res)
            
        })
    },
    article_paihang:(callback) =>{
        $.get(APIURLS.article_pai,
            
            function(res){
            callback(res)
        })
    },
}
