// console.log(location.href);
var id = location.search.substr(4);
console.log(id);



                                                                                 

// 发请求先把下拉框分类数据拿回来渲染在页面中
$.get('http://localhost:8000/admin/category_search', function (res) {
  console.log(res);
  //  使用模板引擎渲染数据
  var htmlStr = template('tmp', res);
  // console.log(htmlStr);
  $('#option').html(htmlStr);
 
 


})

var typeId
// 根据id再次请求
$.get('http://localhost:8000/admin/search', { id: id }, function (res) {
  console.log(res);
  // 当前文章所属的类别 id
      // 当前文章所属的类别 id  
      var typeId = res.data.type;
      console.log(typeId);
  // 将获取的内容显示在表单元素中
  $('#inputEmail3').val(res.data.title);
  $('#article_cover').prop("src", res.data.cover);
  $('#dateinput').val(res.data.date);
  $('#rich_content').val(res.data.content);
  // 目标：交集选择器选中当id为typeid的option 给它加个selected属性
  // 方法一
  // console.log(  $(`option#` + typeId));
  //  console.log($(`option#` + typeId).attr("selected",true));
   $(`option#` + typeId).attr("selected",true)
// 方法2
//  console.log(  $('#option').val(4));
// console.log(  $('#option').val(typeId));
// $('#option').val(typeId)
})

$('#get_change').click(function () {
  console.log(123);

  // 修改功能的formdata
  var fd = new FormData(document.getElementById('article_form'));
  // 补充一个参数
  fd.append("id", id)
  // 单独处理富文本编辑器
  fd.set('content', tinyMCE.activeEditor.getContent())
  // 3.向接口发请求
  // 当发post时，如果通过formData收集参数，则
  // (1)不要设置请求头
  // (2)直接把fd对象放在send()中。xhr.send(fd)
  // 2.4 发送请求，添加数据
  $.ajax({
    type: 'post',
    url: 'http://localhost:8000/admin/article_edit',//bug~：服务器接口错误
    data: fd,
    processData: false,
    // 不设置content-type，而是当设置了formdata上传文件的时候，xhr对象会自动把content-type设置为multipart/form-data;
    contentType: false,
    success: function (data) {
      console.log(data);

      // 判断添加是否成功...
      if (data) {
        // 2.5 跳转回首页
        location.href = './article_list.html';
      } else {
        alert(msg)
      }

    }

  });

})