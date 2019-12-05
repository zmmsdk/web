
// 分类导航
index_search.category_show(function (res) {
    console.log(res);
    // var strHtml = template('模板id',res)
    var htmlStr = template('temp_category_search', res)
    // console.log(htmlStr)
    $('#level_two').html('    <li class="up"></li>' + htmlStr)

    $('#left_menu').html(htmlStr)
})
// 文章热门排行
index_search.in_rank(function (res) {
    console.log(res);
    // var strHtml = template('模板id',res)
    var htmlStr = template('temp_hot', res)
    // console.log(htmlStr)


    $('#content_list').html(htmlStr)
})


// 最新评论
index_search.latest_com(function (res) {
    console.log(res);
    // dayjs.locale('zh-cn'); // 全局设置，中文
    //  格式：dayjs.extend(dayjs_plugin_插件名);
    // dayjs.extend(dayjs_plugin_relativeTime);
    // res.data.dt = dayjs(res.data.dt).toNow();
    // res.data.forEach(function () {
    // console.log(dayjs(res.data.dt).toNow());

    // res.data.dt = dayjs(res.data.dt).toNow();

    // });

    // var strHtml = template('模板id',res)
    var htmlStr = template('temp_com', res)
    // console.log(htmlStr)
    $('#comment_list ').html(htmlStr)
})










// 请求显示文章信息
article_list.re_qu_dt(function (res) {
    console.log(res);
    //  使用模板引擎渲染数据
    var htmlStr = template('temp_con', res);
    // console.log(htmlStr);
    $('#left_con').html(htmlStr);
})
//分页插件(存在问题)
// 保存当前要查询的页数
var curPage;

$('#pagination-demo').twbsPagination({
    totalPages: 46, // 总页数

    visiblePages: 6, // 可见页数
    // first: '首页',
    prev: '上一页',
    next: '下一页',
    // last: '尾页',
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
                // var htmlStr = template(id，res)
                var htmlStr = template('temp_con', res)
                // console.log(htmlStr)
                $('#left_con').html(htmlStr);
            }
        })
    }
});












































// 点击搜索按钮相应文章在list页面局部更新
// 文章筛选功能开始：目标页面的发布状态 
//     <!-- 定义模板 -->
// <script>
/* // 全局变量  */
var curPage = ''; // 表示当前要展示第几页
var type = ''; // 表示文章的类型
var state = ''; // 表示文章的状态
var curTotalPage = ''; // 表示当前查询总页数
/* // 1.局部更新下拉框
// 发请求先把下拉框分类数据拿回来渲染在页面中 */
/* // 文章筛选：1.点击筛选拿回所有数据 */
$('#btn').click(function () {
    var type_txt = $('#value').val().trim()
    $('#ca').html(type_txt)
    if (type_txt === '') {
        alert('请输入分类名')
    } else {
        // 2.获取文章的编号：文章分类的id就是type的编号：获取type值为输入的分类值去请求获取id赋值给type
        get_show.show_request(type_txt)
    }
})

// 文章筛选功能结束 
// 分类导航筛选功能开始
// jquery事件委托写法
// $('#id').on('click','委托',function(){
//     console.log(this);
// })
$('#left_menu').on('click', 'a', function () {
    // console.log(this);
    //   console.log(  $(this).text());
    type_txt = $(this).text();
    $('#ca').html(type_txt)
    // 2.获取文章的编号：文章分类的id就是type的编号：获取type值为输入的分类值去请求获取id赋值给type
    get_show.show_request(type_txt)

})
// 下拉分类导航筛选
$('#level_two').on('click', 'a', function () {
    //console.log(  $(this).text());
    type_txt = $(this).text();
    $('#ca').html(type_txt)
    // 2.获取文章的编号：文章分类的id就是type的编号：获取type值为输入的分类值去请求获取id赋值给type
    get_show.show_request(type_txt)

})






// 文章筛选函数
var get_show = {
    show_request: function (type_txt) {
        index_search.category_show(function (res) {
            // 1. 获取当前的筛选条件。保存到全局变量中
            console.log(res);
            arr = res.data
            arr.forEach(function (item, index, arr) {
                console.log(item.name);
                console.log(index);
                if (type_txt === item.name) {
                    console.log(item.id);
                    type = item.id
                    console.log(type);
                    // 2. 重发请求:拉取回来的数据就是目标页面的数据  先拿回所有符合要求的数据：
                    article_list.re_qu_data(type, function (res) {
                        console.log(res);
                        totalPage = res.totalPage;
                        console.log(totalPage);
                        // 对所有符合要求的数据在页面局部更新:点击筛选把分页销毁  让分页不能再点击
                        // 使用模板引擎技术，渲染数据
                        // var htmlStr = template(id，res)
                        var htmlStr = template('temp_con', res)
                        console.log(htmlStr);
                        $('#left_con').html(htmlStr)
                        // 解决前后总页面不一样的方法：销毁分页重新再做一个分页
                        if (curTotalPage != res.totalPage) {
                            // console.log('前后两次查询结果得到的总页数不相同')
                            // console.log(curTotalPage, res.totalPage)
                            // 由于插件对总页数的变化不敏感，所以如果总页数不同，则要
                            // 先销毁，再创建
                            // 参考：http://josecebe.github.io/twbs-pagination/
                            $('#pagination-demo').twbsPagination('destroy');
                            totalPages = res.totalPage
                        }
                        // 对目标数据进行分页
                        $('#pagination-demo').twbsPagination({
                            totalPages: totalPage, // 当前总页数
                            visiblePages: 6, // 可见页数
                            first: '首页',
                            prev: '上一页',
                            next: '下一页',
                            last: '尾页',
                            onPageClick: function (event, page) {
                                // alert(page);
                                // //     // 把page的值给curPage 分页任务结束 请求数据开始
                                curPage = page;
                                // console.log(totalPages);
                                // 请求数据  // 根据接口的定义，要请哪一页的数据，就传对应的值给page    先拿回所有符合要求的数据：
                                article_list.requery_page(totalPages, curPage, type, function (res) {
                                    // //         // 问题：请求回来的数据没有更新:用着人家的服务器 不看接口文档
                                    // console.log(res);

                                    // //         // 4.  渲染数据·
                                    if (res.code === 200) {
                                        // 使用模板引擎技术，渲染数据
                                        // var htmlStr = template(id，res)
                                        var htmlStr = template('temp_con', res)
                                        // console.log(htmlStr)
                                        $('#left_con').html(htmlStr)
                                    }
                                })
                            }
                        });
                    })
                }
            })
        })
    }
}