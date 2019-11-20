//后台登录页面
    $('#btnLogin').click(function() {
        // 获取用户名和密码
        var myName = $('#uname').val().trim()
        var myPassword = $('#myPassword').val().trim()
        // console.log(myName, myPassword);
        
        // 判断是否为空
        if(myName === '' || myPassword === ''){
            // alert('不能为空');
            $('#msgInfo').text('不能为空')
            $('#myModal').modal('show')
            return; 
        }
        // 发请求，根据返回结果，提示用户
        // $.post(地址，参数，回调)
        // 语义化
        user.login(myName, myPassword,function(res){
            console.log(res);
            if(res.code === 200){
                // window.alert('登陆成功')
                location.href= './index.html'
            } else {
                // alert(res.msg)
                $('#msgInfo').text(res.msg)
                $('#myModal').modal('show')
            }
        })
    })
  
   

