var index_search={
    in_search:callback =>{
        $.get( APIURLS.article_show,res=>{
           callback(res)
            
        })
    },
    category_show:callback =>{
        $.get( APIURLS.category_show,res=>{
           callback(res)
            
        })
    },
}