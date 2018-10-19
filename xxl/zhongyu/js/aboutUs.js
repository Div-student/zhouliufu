$(function () {
    var jump = ['首页', '外包模式','企业升级技能服务','服务行业','专家介绍','合作案例','关于我们']
    //  循环链接
    var links = ['../maindex.html','../html/wbfw.html','../html/skill.html','../html/fwhy.html','../html/expert.html','../html/coroperateCase.html','../html/about-us.html']
    $.each (jump, function(index,item) {
        $('.head_nav>div:eq(1)').append('<a href='+links[index]+'>'+item+'</a>')
    })
    $('.head_nav>div:eq(1)>a:last').addClass('a_heightlight')
    $('.head_nav>div:eq(1)>a').click(function () {
        $('.head_nav>div:eq(1)>a').removeClass('a_heightlight')
        $(this).addClass('a_heightlight')
    })
    $('.head_nav>div:eq(1)>a:eq(2)').click(function () {
        $(location).prop('href','../html/skill.html')
    })
})
