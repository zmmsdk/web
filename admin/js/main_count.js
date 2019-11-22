// 文章数量统计
var curve_show = `curve_show`;


var article = {
   
    article_url: 'http://localhost:8000/',
     // 文章数量统计
    admin_article_count:'admin/article_count',
    // 评论数量统计
    admin_comment_count:'admin/comment_count',
    // 月新增文章数
    admin_month_article_count:'admin/month_article_count',
    // 各类型文档数量统计
    admin_article_category_count:'admin/article_category_count',
    // 月文章访问量
    admin_article_category_visit:'admin/article_category_visit',
    
}
// 文章数量统计
$.get(`${article.article_url}${article.admin_article_count}`, function (res) {
    console.log(res);
    if (res.code === 200) {
        $all_count.text(res.data.all_count);
        $day_count.text(res.data.day_count);
    }
});

// 评论数量统计
$.get(`${article.article_url}${article.admin_comment_count}`, function (res) {
    console.log(res);
    if (res.code === 200) {
        $c_all_count.text(res.data.all_count);
        $c_day_count.text(res.data.day_count);
    }
});
// 月新增文章数
$.get(`${article.article_url}${article.admin_month_article_count}`, function (res) {
    console.log(res);
    if (res.code === 200) {
        var data = res.data;
        console.log(data);
        var oChart = echarts.init(document.getElementById(curve_show));
        var aList_all = data;

        let aCount = [];
        let aDate = [];

        for (var i = 0; i < aList_all.length; i++) {
            aCount.push(aList_all[i].day_count);
            aDate.push(aList_all[i].day);
        }

        var chartopt = {
            title: {
                text: '月新增文章数',
                left: 'center',
                top: '10'
            },
            tooltip: {
                trigger: 'axis'
            },
            legend: {
                data: ['新增文章'],
                top: '40'
            },
            toolbox: {
                show: true,
                feature: {
                    mark: {
                        show: true
                    },
                    dataView: {
                        show: true,
                        readOnly: false
                    },
                    magicType: {
                        show: true,
                        type: ['line', 'bar']
                    },
                    restore: {
                        show: true
                    },
                    saveAsImage: {
                        show: true
                    }
                }
            },
            calculable: true,
            xAxis: [{
                name: '日',
                type: 'category',
                boundaryGap: false,
                data: aDate
            }],
            yAxis: [{
                name: '月新增文章数',
                type: 'value'
            }],
            series: [{
                name: '新增文章',
                type: 'line',
                smooth: true,
                itemStyle: {
                    normal: {
                        areaStyle: {
                            type: 'default'
                        },
                        color: '#f80'
                    },
                    lineStyle: {
                        color: '#f80'
                    }
                },
                data: aCount
            }],
            areaStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: 'rgba(255,136,0,0.39)'
                    }, {
                        offset: .34,
                        color: 'rgba(255,180,0,0.25)'
                    }, {
                        offset: 1,
                        color: 'rgba(255,222,0,0.00)'
                    }])

                }
            },
            grid: {
                show: true,
                x: 50,
                x2: 50,
                y: 80,
                height: 220
            }
        };

        oChart.setOption(chartopt);
    }
});

// 各类型文档数量统计
$.get(`${article.article_url}${article.admin_article_category_count}`, function (res) {
    console.log(res);
    if (res.code === 200) {
        var data = res.data;
        // console.log(data);
        for (var i = 0; i < data.length; i++) {
            console.log(data[i]);

        }

        var oPie = echarts.init(document.getElementById('pie_show'));
        var oPieopt = {
            title: {
                top: 10,
                text: '分类文章数量比',
                x: 'center'
            },
            tooltip: {
                trigger: 'item',
                formatter: "{a} <br/>{b} : {c} ({d}%)"
            },
            color: ['#5885e8', '#13cfd5', '#00ce68', '#ff9565'],
            legend: {
                x: 'center',
                top: 65,
                data: ['奇趣事', '会生活', '爱旅行', '趣美味']
            },
            toolbox: {
                show: true,
                x: 'center',
                top: 35,
                feature: {
                    mark: {
                        show: true
                    },
                    dataView: {
                        show: true,
                        readOnly: false
                    },
                    magicType: {
                        show: true,
                        type: ['pie', 'funnel'],
                        option: {
                            funnel: {
                                x: '25%',
                                width: '50%',
                                funnelAlign: 'left',
                                max: 1548
                            }
                        }
                    },
                    restore: {
                        show: true
                    },
                    saveAsImage: {
                        show: true
                    }
                }
            },
            calculable: true,
            series: [{
                name: '访问来源',
                type: 'pie',
                radius: ['45%', '60%'],
                center: ['50%', '65%'],
                data: [{
                        value: 300,
                        name: '奇趣事'
                    },
                    {
                        value: 100,
                        name: '会生活'
                    },
                    {
                        value: 260,
                        name: '爱旅行'
                    },
                    {
                        value: 180,
                        name: '趣美味'
                    }
                ]
            }]
        };
        oPie.setOption(oPieopt);
    }
});

// 月文章访问量
$.get(`${article.article_url}${article.admin_article_category_visit}`, function (res) {
    console.log(res);
    if (res.code === 200) {
        var data = res.data;
        console.log(data);
    }
});