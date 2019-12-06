// 发请求显示页面内容
  index_search.in_search(function (res) {
   // 使用模板引擎 
   let htmlStr = template("temp_foucs",res)
    // console.log(htmlStr);
    $("#focus_list").html(htmlStr)
})


