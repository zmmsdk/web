

 
 var cate_show ={
    data_show:function(callback){
      $.get(category.cata_url, function(res){
          callback(res)
      })
    },
    // 发请求更新分类
   requery:function(recipient_name,recipient_other_name,callback){
    $.post(category.requery, { name: recipient_name, slug: recipient_other_name }, function (res) {
        callback(res);
      });
   },
   cate_edit:function(id, name, slug,callback){
    $.post(category.cate_edit, { id: id, name: name, slug: slug }, function (res) {
        callback(res);
        
      });
  },
  cate_delete:function(id,callback){
    $.post(category.cate_delete, { id: id }, function (res) {
      callback(res)
  })
  },
  re_data:function(callback){
    $.get(category.re_data, function (res) {
          callback(res)
        })
   }
 }





