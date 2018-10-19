$(function () {
 var daohan = ['首页', '外包模式','企业升级技能服务','服务行业','专家介绍','合作案例','关于我们']
//  循环链接
var links = ['../maindex.html','../html/wbfw.html','../html/skill.html','../html/fwhy.html','../html/expert.html','../html/coroperateCase.html','../html/about-us.html']
$.each (daohan,function(index, item){
  $('.baohan_a').append('<a href='+links[index]+'>'+item+'</a>')
})
$('.baohan_a > a:eq(4)').addClass('color_a')
$('.baohan_a  a').on('click', function () {
  $('.baohan_a  a').removeClass('color_a')
  $(this).addClass('color_a')
})
})
