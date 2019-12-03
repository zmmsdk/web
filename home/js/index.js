  // 发请求显示页面内容
  index_search.in_search(function (res) {
    // console.log(11)
    console.log(res);
    // res = html(res)

   // 使用模板引擎 
   var htmlStr = template("temp_foucs",res)

    // console.log(htmlStr);
    $("#focus_list").html(htmlStr)

     // 最新资讯
     var htmlStr = template('temp_new', res)
    console.log(htmlStr);
    $('#new').html(htmlStr)

})


index_search.category_show( function (res) {
    console.log(res);
    // var strHtml = template('模板id',res)
    var htmlStr = template('temp_category_search', res)
    // console.log(htmlStr)
    $('#level_two').html('    <li class="up"></li>' + htmlStr)

    $('#left_menu').html(htmlStr)
})


// 文章热门排行
index_search.in_rank( function (res) {
    console.log(res);
    // var strHtml = template('模板id',res)
    var htmlStr = template('temp_hot', res)
    // console.log(htmlStr)
 

    $('#content_list').html(htmlStr)
})


// 最新评论
index_search.latest_com( function (res) {
    console.log(res);
    // var strHtml = template('模板id',res)
    var htmlStr = template('temp_com', res)
    console.log(htmlStr)
 

    $('#comment_list ').html(htmlStr)
})