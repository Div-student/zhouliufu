/** Created by THINK on 2018/9/13.*/
$(function () {
    var hover_json_top =[
        {'src':'../../png/explor_down_pic2.jpg','title':'品牌简介'},
        {'src':'../../png/explor_down_pic3.jpg','title':'大事记'},
        {'src':'../../png/explor_down_pic4.jpg','title':'工匠精神'}
    ];
    var hover_json_bottom=[
        {'src':'../../png/explor_down_pic5.jpg','title':'品牌简介'},
        {'src':'../../png/explor_down_pic6.jpg','title':'大事记'},
        {'src':'../../png/explor_down_pic7.jpg','title':'工匠精神'}
    ];
    $('.hover_right_img').wrap('<div class="aaa"></div>');
    $('#sspp').hover(function () {
        $('.bao_hover_box').show();
    },function () {
        $('.bao_hover_box').hide();
    });
    $('.bao_hover_box').hover(function () {
        $('.bao_hover_box').show();
    },function () {
        $('.bao_hover_box').hide();
    });
    $.each(hover_json_top,function (index,item) {
        $('.hover_box_right_top').append('<div><img src="'+item.src+'"><br>'+item.title+'</div>')
    });
    $.each(hover_json_bottom,function (index,item) {
        $('.hover_box_right_bottom').append('<div><img src="'+item.src+'"><br>'+item.title+'</div>')
    });
    $('.hover_box_right_top>div, .hover_box_right_bottom>div').addClass('hover_right_img_box');
    $('.hover_box_right img').addClass('hover_right_img');
});