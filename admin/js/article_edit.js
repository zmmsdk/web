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



