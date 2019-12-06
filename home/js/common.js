
// 分类导航
index_search.category_show(function (res) {
    console.log(res);
    // let strHtml = template('模板id',res)
    let htmlStr = template('temp_category_search', res)
    // console.log(htmlStr)
    $('#level_two').html('    <li class="up"></li>' + htmlStr)

    $('#left_menu').html(htmlStr)
})
// 文章热门排行
index_search.in_rank(function (res) {
    console.log(res);
    // let strHtml = template('模板id',res)
    let htmlStr = template('temp_hot', res)
    // console.log(htmlStr)


    $('#content_list').html(htmlStr)
})

dayjs.locale('zh-cn'); // 全局设置，中文
//  格式：dayjs.extend(dayjs_plugin_插件名);
dayjs.extend(dayjs_plugin_relativeTime);
// 最新评论
index_search.latest_com(function (res) {
    console.log(res);
  
    // res.data.dt = dayjs(res.data.dt).toNow();
    res.data.forEach(function(item){
        item.relativeDt =  dayjs(item.dt).toNow()
    })
    console.log(res.data)

    // let strHtml = template('模板id',res)
    let htmlStr = template('temp_com', res)
    console.log(htmlStr)
    $('#comment_list ').html(htmlStr)
})










// 请求显示文章信息
article_list.re_qu_dt(function (res) {
    console.log(res);
    //  使用模板引擎渲染数据
    let htmlStr = template('temp_con', res);
    // console.log(htmlStr);
    $('#left_con').html(htmlStr);
})
//分页插件(存在问题)
// 保存当前要查询的页数
let curPage;

$('#pagination-demo').twbsPagination({
    totalPages: 46, // 总页数

    visiblePages: 6, // 可见页数
    first: '首页',
    prev: '上一页',
    next: '下一页',
    last: '尾页',
    onPageClick: function (event, page) {
        // alert(page);
        // 把page的值给curPage 分页任务结束 请求数据开始
        curPage = page;
        // alert(curPage);
        // 请求数据  // 根据接口的定义，要请哪一页的数据，就传对应的值给page
        article_list.article_li(curPage, function (res) {
            // 问题：请求回来的数据没有更新:用着人家的服务器 不看接口文档
            res.totalPages = curPage;

            curTotalPage = res.totalPages
            // console.log(res.totalPages);0
            // console.log(res.data);

            // 4.  渲染数据·
            if (res.code === 200) {
                // 使用模板引擎技术，渲染数据
                // let htmlStr = template(id，res)
                let htmlStr = template('temp_con', res)
                // console.log(htmlStr)
                $('#left_con').html(htmlStr);
            }
        })
    }
});












































