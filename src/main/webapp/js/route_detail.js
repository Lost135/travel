$(document).ready(function() {
    //自动播放
    goImg();
});
function goImg(){
    //焦点图效果
    //点击图片切换图片
    $('.little_img').on('mousemove', function() {
        $('.little_img').removeClass('cur_img');
        var big_pic = $(this).data('bigpic');
        $('.big_img').attr('src', big_pic);
        $(this).addClass('cur_img');
    });
    //上下切换
    var picindex = 0;
    var nextindex = 4;
    $('.down_img').on('click',function(){
    var num = $('.little_img').length;
    if((nextindex + 1) <= num){
    $('.little_img:eq('+picindex+')').hide();
    $('.little_img:eq('+nextindex+')').show();
    picindex = picindex + 1;
    nextindex = nextindex + 1;
}
});
    $('.up_img').on('click',function(){
    var num = $('.little_img').length;
    if(picindex > 0){
    $('.little_img:eq('+(nextindex-1)+')').hide();
    $('.little_img:eq('+(picindex-1)+')').show();
    picindex = picindex - 1;
    nextindex = nextindex - 1;
}
});
}

    //自动轮播方法
    function auto_play() {
    var cur_index = $('.prosum_left dd').find('a.cur_img').index();
    cur_index = cur_index - 1;
    var num = $('.little_img').length;
    var max_index = 3;
    if ((num - 1) < 3) {
    max_index = num - 1;
}
    if (cur_index < max_index) {
    var next_index = cur_index + 1;
    var big_pic = $('.little_img:eq(' + next_index + ')').data('bigpic');
    $('.little_img').removeClass('cur_img');
    $('.little_img:eq(' + next_index + ')').addClass('cur_img');
    $('.big_img').attr('src', big_pic);
} else {
    var big_pic = $('.little_img:eq(0)').data('bigpic');
    $('.little_img').removeClass('cur_img');
    $('.little_img:eq(0)').addClass('cur_img');
    $('.big_img').attr('src', big_pic);
    }
}

$(function (){
    //1.获取rid
    var rid = getParameter("rid");
    //2.发送请求请求 route/findOne
    $.get("route/findOne",{rid:rid},function (route){
        //3.解析数据填充html
        $("#rname").html(route.rname);
        $("#routeIntroduce").html(route.routeIntroduce);
        $("#price").html("¥"+route.price);
        $("#sname").html(route.seller.sname);
        $("#consphone").html(route.seller.consphone);
        $("#address").html(route.seller.address);
        //收藏次数
        $("#favoriteCount").html("已收藏"+route.count+"次");
        //图片展示
        var ddstr = '<a class="up_img up_img_disable"></a>';
        //遍历routeImgList
        for(var i = 0; i<route.routeImgList.length; i++){
            var astr;
            if(i >=4){
                astr = '<a title="" class="little_img" data-bigpic="'+route.routeImgList[i].bigPic+'" style="display:none;">\n' +
                    '<img src="'+route.routeImgList[i].smallPic+'">\n' +
                    '</a>';
            }else {
                astr = '<a title="" class="little_img" data-bigpic="'+route.routeImgList[i].bigPic+'">\n' +
                    '<img src="'+route.routeImgList[i].smallPic+'">\n' +
                    '</a>';
            }
            ddstr +=astr;
        }
        ddstr += '<a class="down_img down_img_disable" style="margin-bottom: 0;"></a>';
        $("#dd").html(ddstr);
        //图片展示和切换代码调用
        $('.big_img').attr('src', route.routeImgList[0].bigPic);
        goImg();
    });
    // 发送请求，判断用户是否收藏过该线路
    $.get("route/isFavorite",{rid:rid},function (flag){
       if(flag){
           $("#favorite").addClass("already");
           //设置收藏按钮的样式
           $("#favorite").attr("disabled","disabled");
           //删除按钮的点击事件
           $("#favorite").removeAttr("onclick");
       }else {
       }
    });
    //点击收藏按钮触发的方法

});

var rid = getParameter("rid");
function addFavorite(){
    $.get("user/findOne",{},function (user){
        //如果用户登入则刷新addFavorite
        if(user){
            $.get("route/addFavorite",{rid:rid},function (){
                location.reload();
            });
        }else {
            self.location="http://localhost:8080/travel/login.html";
        }
    })
}
