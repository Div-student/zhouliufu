/**
 * Created by THINK on 2018/9/14.
 */
$(function () {
    var arr = ["首页","外包模式","企业服务技能升级","服务行业","专家介绍","合作案例","关于我们"];
    //  循环链接
    var links = ['maindex.html','html/wbfw.html','html/skill.html','html/fwhy.html','html/expert.html','html/coroperateCase.html','html/about-us.html']
    $.each(arr,function(index,item){
        $('.daohang-lian').append('<a href='+links[index]+'>'+item+'</a>')
    });
    $('.daohang-lian>a:eq(0)').addClass('san')
    $('.daohang-lian a').click(function () {
        $('.daohang-lian a').removeClass('san')
        $(this).addClass('san')
    })
})
