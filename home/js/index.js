// 发请求显示页面内容
  index_search.in_search(function (res) {
    // console.log(11)
    // console.log(res);
    // res = html(res)

   // 使用模板引擎 
   var htmlStr = template("temp_foucs",res)

    // console.log(htmlStr);
    $("#focus_list").html(htmlStr)

     // 最新资讯
    //  var htmlStr = template('temp_new', res)
    // console.log(htmlStr);
    // $('#new').html(htmlStr)

})


