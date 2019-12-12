let article_search = {
    
    sub:(comment_name,comment_input ,callback) =>{
        $.post(APIURLS.sub_comment,{ name: comment_name, content:  comment_input },
            
            function(res){
            callback(res)
        })
    },
    // 获取所有评论
   comment_li:(callback) =>{
        $.post(APIURLS.li_comment,function(res){
            callback(res)
        })
    },
    ar_detail:(id ,callback) =>{
        $.get(APIURLS.article_detail,{ id:id, },
            
            function(res){
            callback(res)
        })
    },



    

}