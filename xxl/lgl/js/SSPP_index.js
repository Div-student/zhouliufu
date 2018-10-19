/**
 * Created by THINK on 2018/9/11.
 */
$(function () {
    var dh =[
        {'title':'品牌简介'},
        {'title':'大事记'},
        {'title':'工匠精神'},
        {'title':'产品传播'},
        {'title':'明星推广'},
        {'title':'公益活动'},
        {'title':'行业规模'}
    ];
    $.each(dh,function(index,item){
        $('.ttt>nav').append('<li>'+item.title+'<span>＞</span></li>')
    });
    $('.ttt>nav>li').click(function () {
        $('.ttt>nav>li').css('color','black');
        $(this).css('color','#DAB866');
    });
    // $('.ttt>nav>li:eq(4)').append('<ol>' +
    //     '<li>产品/潮流</li>' +
    //     '<li>营销/传播</li>' +
    //     '<li>品牌/传播</li>' +
    //     '<li>战略/合作</li>' +
    //     '</ol>')
});