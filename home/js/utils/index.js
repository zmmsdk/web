let index_search={
 
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
    in_rank:callback =>{
        $.get( APIURLS.rank,{
            perpage: 5,
            state: '已发布'
        },res=>{
           callback(res)
            
        })
    },
    latest_com:callback =>{
        $.get( APIURLS.latest_comment,res=>{
           callback(res)
            
        })
    },
  
}
