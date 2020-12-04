/*
				表单校验：
					1.用户名：单词字符，长度8到20位
					2.密码：单词字符，长度8到20位
					3.email：邮件格式
					4.姓名：非空
					5.手机号：手机号格式
					6.出生日期：非空
					7.验证码：非空
			 */

//校验用户名
//单词字符，长度8到20位
function checkUsername(){
    var username = $("#username").val();
    var reg_username = /^\w{8,20}$/;

    var flag = reg_username.test(username);
    if(flag){
        $("#username").css("border","");
    }else {
        $("#username").css("border","1px solid red");
    }
    return flag;
}

function checkPassword(){
    var password = $("#password").val();
    var reg_password = /^\w{8,20}$/;

    var flag = reg_password.test(password);
    if(flag){
        $("#password").css("border","");
    }else {
        $("#password").css("border","1px solid red");
    }
    return flag;
}

function checkEmail(){
    var email = $("#email").val();
    var reg_email = /^\w+@\w+\.\w+$/;

    var  flag = reg_email.test(email);
    if(flag){
        $("#email").css("border","");
    }else {
        $("#email").css("border","1px solid red");
    }
    return flag;
}

function checkName(){
    var name = $("#name").val();
    var reg_name = /^\w+\s+\w+$/;
    var reg2_name = /^\s+$/;

    var flag = true
    if(name == null || reg2_name.test(name) || reg_name.test(name)){
        $("#name").css("border","1px solid red");
        flag = false;
    }else {
        $("#name").css("border","");
    }
    return flag;
}

$(function () {
   $("#registerForm").submit(function (){
       if (checkUsername() && checkPassword() && checkEmail() && checkName()){
           $.post("registUserServlet", $(this).serialize(), function (data){
               if(data.flag){
                   location.href="register_ok.html";
               }else {
                   $("#errorMsg").html(data.errorMsg);
               }
           });
       }
       return false;
   });
    $("#username").blur(checkUsername);
    $("#password").blur(checkPassword);
    $("#email").blur(checkEmail);
    $("#name").blur(checkName);
});

