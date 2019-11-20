// import 自定义模块名称 from '模块标识符'
// import user from 'user'
//后台登录页面
    $('#btnLogin').click(function() {
        // 获取用户名和密码
        var user_name = $('#uname').val().trim();
        var password = $('#mypassword').val().trim();
        // console.log(myName, myPassword);
        
        // 判断是否为空
        if(user_name === "" ||password === ""){
            alert('输入不能为空')
        }
      
     
        // 发请求，根据返回结果，提示用户
     
        // $.post(地址，参数，回调)
 
        
        
        user.login(user_name,password,function(res){
            console.log(res);
            if(res.code === 400){
                alert('用户名或密码错误');
            }else if(res.code === 200){
                alert('登录成功');
                location.href = './index.html';
        } 
        })
        // 语义化
   
       
    })
  

