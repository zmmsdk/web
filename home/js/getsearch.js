// 筛选模块
// 文章筛选函数
let get_show = {
    show_request: function (type_txt) {
        index_search.category_show(function (res) {
            // 1. 获取当前的筛选条件。保存到全局变量中
            arr = res.data
            arr.forEach(function (item, index, arr) {
                if (type_txt === item.name) {
                    console.log(item.id);
                    type = item.id
                    // 2. 重发请求:拉取回来的数据就是目标页面的数据  先拿回所有符合要求的数据：
                    article_list.re_qu_data(type, function (res) {
                        totalPage = res.totalPage;
                        // 对所有符合要求的数据在页面局部更新:点击筛选把分页销毁  让分页不能再点击
                        let htmlStr = template('temp_con', res)
                        console.log(htmlStr);
                        $('#left_con').html(htmlStr)
                        // 解决前后总页面不一样的方法：销毁分页重新再做一个分页
                        if (curTotalPage != res.totalPage) {
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
                             // 把page的值给curPage 分页任务结束 请求数据开始
                                // 请求数据  // 根据接口的定义，要请哪一页的数据，就传对应的值给page    先拿回所有符合要求的数据：
                                article_list.requery_page(totalPages, curPage, type, function (res) {
                          // 问题：请求回来的数据没有更新:用着人家的服务器 不看接口文档
                                 // 4.  渲染数据·
                                    if (res.code === 200) {
                                        // 使用模板引擎技术，渲染数据
                                        let htmlStr = template('temp_con', res)
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
// 点击搜索按钮相应文章在list页面局部更新
// 文章筛选功能开始：目标页面的发布状态 
//     <!-- 定义模板 -->
// <script>
/* // 全局变量  */
// let curPage = ''; // 表示当前要展示第几页
let type = ''; // 表示文章的类型
let state = ''; // 表示文章的状态
let curTotalPage = ''; // 表示当前查询总页数
/* // 1.局部更新下拉框
// 发请求先把下拉框分类数据拿回来渲染在页面中 */
/* // 文章筛选：1.点击筛选拿回所有数据 */
$('#btn').click(function () {
    let type_txt = $('#value').val().trim()
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
// 首页跳转局部更新
// console.log(location.search.slice(6));
// console.log(decodeURI(location.search.slice(6)));
if( decodeURI(location.search.slice(6))){
    // console.log(type_txt);
    type_txt = decodeURI(location.search.slice(6));
    $('#ca').html(type_txt)
    // 2.获取文章的编号：文章分类的id就是type的编号：获取type值为输入的分类值去请求获取id赋值给type
    get_show.show_request(type_txt)
}

// "科学"








