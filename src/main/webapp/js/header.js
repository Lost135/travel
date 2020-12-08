$(function (){
    $.get("findUserServlet",{},function (data) {
        var msg = "欢迎回来，"+data.name;
        $("#span_username").html(msg);

    });
});