/**
 * Created by THINK on 2018/9/13.
 */
$(function () {
    var dh = [
        {'title':'品牌简介'},
        {'title':'品牌理念'},
        {'title':'品牌价值观'},
        {'title':'企业愿望'}
    ];
    $.each(dh,function(index,item){
        $('.ttt>nav').append('<li>'+item.title+'</li>')
    });
})