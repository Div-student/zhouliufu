/**
 * Created by THINK on 2018/9/18.
 */
$(function () {
    var daohan = ['首页', '外包模式','企业升级技能服务','服务行业','专家介绍','合作案例','关于我们']
//  循环链接
    var links = ['../html/maindex.html','../html/wbfw.html','../html/skill.html','../html/fwhy.html','../html/expert.html','../html/coroperateCase.html','../html/about-us.html']
    $.each (daohan,function(index, item){
        $('.daohang-lian').append('<a href='+links[index]+'>'+item+'</a>')
    })
    $('.daohang-lian>a:eq(1)').addClass('san')
    $('.daohang-lian a').click(function () {
        $('.daohang-lian a').removeClass('san')
        $(this).addClass('san')
    })
})
