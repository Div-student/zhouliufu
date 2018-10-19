/**
 * Created by THINK on 2018/9/13.
 */
$(function () {
    var dh = [
        {'title':'2004-2014'},
        {'title':'2014-2015'},
        {'title':'2016-2017'}
    ];
    var dsj = [
        {'src':'../../png/ts_sj_pic2.jpg','h3':'2014年','p':'二代终端形象全新升级;召开第二届加盟商大会，荣获“央视宣传品牌”'},
        {'src':'../../png/ts_sj_pic3.jpg','h3':'2015年','p':'周六福与国际铂金协会达成战略合作，携手蔡少芬打造全新视觉形象TVC广告片、平面广告片，品牌形象全面升级'},
        {'src':'../../png/ts_sj_pic4.jpg','h3':'2016年','p':'周六福品牌成功入选世界品牌实验室评选“中国500最具价值品牌”'},
        {'src':'../../png/ts_sj_pic5.jpg','h3':'2017年','p':'周六福再次揽获“中国500最具价值品牌'}
    ];
    $.each(dh,function(index,item){
        $('.ttt>nav').append('<li>'+item.title+'</li>')
    });
    $.each(dsj,function (index,item) {
        $('.ttt>article').append('<section>' +
            '<img src="'+item.src+'">' +
            '<h3>'+item.h3+'</h3>' +
            '<p>'+item.p+'</p>' +
            '</section>')
    });
    $('section:nth-child(even)').addClass('fr');
    $('.ttt>nav>li:eq(0)').click(function () {
       var jb=$('section:eq(0)').offset().top;
       $('body,html').animate({
           scrollTop:jb
       },800);
    })
    $('.ttt>nav>li:eq(1)').click(function () {
        var jb=$('section:eq(1)').offset().top;
        $('body,html').animate({
            scrollTop:jb
        },800);
    })
    $('.ttt>nav>li:eq(2)').click(function () {
        var jb=$('section:eq(3)').offset().top;
        $('body,html').animate({
            scrollTop:jb
        },800);
    })
});