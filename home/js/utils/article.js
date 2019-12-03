var article_search = {
    sub:(comment_name,comment_input ,callback) =>{
        $.post(APIURLS.sub_comment,{ name: comment_name, content:  comment_input },
            
            function(res){
            callback(res)
        })
    },
   comment_li:(callback) =>{
        $.get(APIURLS.li_comment,function(res){
            callback(res)
        })
    },
}