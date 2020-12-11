$(function (){
    //var search = location.search;
    //var cid = search.split("cid=")[1];
    //当页码加载完成后，调用load方法，发送ajax请求加载数据
    var cid = getParameter("cid");
    var rname = getParameter("rname");
    //判断rname如果不为null或者""
    if(rname){
        //url解码
        rname = window.decodeURIComponent(rname);
    }else {
        rname = "";
    }
    load(cid,null,rname);
});

function load(cid,currentPage,rname){
    //发送ajax请求，请求route/pageQuery,传递cid
    $.get("route/pageQuery",{cid:cid,currentPage:currentPage,rname:rname},function (pb){
        //解析pagebean数据，展示到页面上
        //1.分页工具条数据展示
        $("#totalPage").html(pb.totalPage);
        $("#totalCount").html(pb.totalCount);

        var lis = "";
        //转跳首页
        var firstPage = '<li onclick="javascipt:load('+cid+',1,\''+rname+'\')"><a href="javascript:void(0)">首页</a></li>';

        //计算上一页的页码
        var beforeNum = pb.currentPage - 1;
        if(beforeNum <= 0){
            beforeNum = 1;
        }

        var beforePage = '<li  onclick="javascipt:load('+cid+','+beforeNum+',\''+rname+'\')" class="threeword"><a href="javascript:void(0)">上一页</a></li>';

        lis +=firstPage;
        lis +=beforePage;

        //1.2 展示分页页码
        /*
            1.一共展示10个页码，能够达到前5后4的效果
            2.如果前边不够5个，后边补齐10个
            3.如果后边不足4个，前边补齐10个
        */
        // 定义开始位置begin,结束位置 end
        var begin;
        var end;

        if(pb.totalPage <= 10){
            begin = 1;
            end = pb.totalPage;
        }else {
            begin = pb.currentPage -5;
            end = pb.currentPage +4;
            //2.如果前边不够5个，后边补齐10个
            if(begin < 1){
                begin = 1;
                end = begin + 9;
            }
            //3.如果后边不足4个，前边补齐10个
            if(end > pb.totalPage){
                end = pb.totalPage;
                begin = end - 9 ;
            }
        }

        for(var i = begin; i <= end; i++){
            var li;
            if(pb.currentPage == i){
                //当前页码加样式
                li = '<li class="curPage" onclick="javascipt:load('+cid+','+i+',\''+rname+'\')"><a href="javascript:void(0)">'+i+'</a></li>';
            }else {
                //创建页码的li
                li = '<li onclick="javascipt:load('+cid+','+i+',\''+rname+'\')"><a href="javascript:void(0)">'+i+'</a></li>';
            }
            lis += li;
        }

        //末页
        var lastPage = '<li class="threeword" onclick="javascipt:load('+cid+',' + pb.totalPage +',\''+rname+'\')"><a href="javascript:void(0)">末页</a></li>';
        //计算下一页的页码
        var nextNum = pb.currentPage + 1;
        if(nextNum >= end){
            nextNum = end;
        }
        var nextPage = '<li  onclick="javascipt:load('+cid+','+nextNum+',\''+rname+'\')" class="threeword"><a href="javascript:void(0)">下一页</a></li>';

        lis += nextPage;
        lis +=lastPage;

        //将lis内容设置到 ul
        $("#pageNum").html(lis);

        //2.列表数据展示
        var route_lis = "";
        for(var i = 0; i<pb.list.length; i++){
            var route = pb.list[i];
            var li = '<li>\n' +
                '<div class="img"><img src="'+route.rimage+'" style="width: 299px;"></div>\n' +
                '<div class="text1">\n' +
                '<p>'+route.rname+'</p>\n' +
                '<br/>\n' +
                '<p>'+route.routeIntroduce+'</p>\n' +
                '</div>\n' +
                '<div class="price">\n' +
                '<p class="price_num">\n' +
                '<span>&yen;</span>\n' +
                '<span>'+route.price+'</span>\n' +
                '<span>起</span>\n' +
                '</p>\n' +
                '<p><a href="route_detail.html?rid='+route.rid+'">查看详情</a></p>\n' +
                '</div>\n' +
                '</li>';
            route_lis +=li;
        }
        $("#route").html(route_lis);

        //定位到页面顶部
        window.scrollTo(0,0);
    });
}