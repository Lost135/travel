$(function (){
    //查询用户信息
    $.get("user/findOne",{},function (data) {
        var msg = "欢迎回来，"+data.name;
        $("#span_username").html(msg);

    });

    //查询分类数据
    $.get("category/findAll", {}, function (data){
        var lis = '<li class="nav-active"><a href="index.html">首页</a></li>';
        //遍历数组,拼接字符串(<li>)
        for (var i = 0; i < data.length; i++) {
            var li = '<li><a href="route_list.html?cid='+data[i].cid+'">'+data[i].cname+'</a></li>';
            lis += li;
        }
        //拼接收藏排行榜的li,<li><a href="favoriterank.html">收藏排行榜</a></li>
        lis+= '<li><a href="favoriterank.html">收藏排行榜</a></li>';
        $("#category").html(lis);
    });
});