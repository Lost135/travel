$(function () {
    $.get("route/pageQuery", {cid: 5,pageSize:6}, function (pb) {
        //列表数据展示
        var route_lis = "";
        for (var i = 0; i < 6; i++) {
            var route = pb.list[i];
            var li = '<div class="col-md-4">\n' +
                '<a href="route_detail.html?rid=' + route.rid + '">\n' +
                '<img src="' + route.rimage + '" style="width: 299px,height:400px"  alt="">\n' +
                '<p>' + route.rname.substring(0, 38)+'</p>\n' +
                '<div class="has_border">\n' +
                '<div class="price">网付价<em>￥</em><strong> ' + route.price + '</strong><em>起</em></div>\n' +
                '</div>\n' +
                '</a>\n' +
                '</div>\n';
            route_lis += li;
        }
        $("#guonei_row").html(route_lis);

    });
    $.get("route/pageQuery", {cid: 6,pageSize:6}, function (pb) {
        var route_lis2 = "";
        for (var i = 0; i < 6; i++) {
            var route2 = pb.list[i];
            var li2 = '<div class="col-md-4">\n' +
                '<a href="route_detail.html?rid=' + route2.rid + '">\n' +
                '<img src="' + route2.rimage  + '" style="width: 299px,height:400px"  alt="">\n' +
                '<p>'+route2.rname.substring(0, 38)+'</p>\n' +
                '<div class="has_border">\n' +
                '<div class="price">网付价<em>￥</em><strong> '+ route2.price + '</strong><em>起</em></div>\n' +
                '</div>\n' +
                '</a>\n' +
                '</div>\n';
            route_lis2 += li2;
        }
        $("#jingwai_row").html(route_lis2);

    });
});