// console.log(location.href);
var url = location.href ;

// 获取url后面的参数
function getParams(url) {
    // 获取? 后面第一个字符的索引
    var index = url.indexOf('?') + 1;
    // url中?后面的字符串 name=zs&age=18&a=1&b=2
    var params = url.substr(index);
    // 使用& 切割字符串 ，返回一个数组
    var arr = params.split('&');
    var o = {};
    // 数组中每一项的样子 key = value
    for (var i = 0; i < arr.length; i++) {
      var tmpArr = arr[i].split('=');
      var key = tmpArr[0];
      var value = tmpArr[1];

      o[key] = value;
    }
    return o;
  }
// 获取url中的id
  var obj = getParams(url);
  console.log(obj.id);

//   console.log(obj.name);
//   console.log(obj.age);


// 根据id再次请求
$.get('http://localhost:8000/admin/search',{id:obj.id},function(res){
    console.log(res);
    // 将获取的内容显示在表单元素中
     $('#inputEmail3').val(res.data.title);
     $('#article_cover').prop("src",res.data.cover);
     $('#dateinput').val(res.data.date);
     $('#rich_content').val(res.data.content);
    
    

})


// 发请求先把下拉框分类数据拿回来渲染在页面中
$.get('http://localhost:8000/admin/category_search',function(res){
  console.log(res);
  //  使用模板引擎渲染数据
  var htmlStr = template('tmp',res);
  $('#option').html(htmlStr);
  
})



