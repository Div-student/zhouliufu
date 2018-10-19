$(function(){
  // $(".headernavy li span").hover(
  //   function(){
  //     $(this).css({"color":"#00ffea", "border-bottom":"1px solid #00ffea"})},
  //     function(){}
  //     )
  $(".headernavy li span").click(function(){
    $(".headernavy li span").css({"color":"white", "border-bottom":"none"}) 
    $(this).css({"color":"#00ffea", "border-bottom":"1px solid #00ffea"})
  })
  //链接跳转
  $('.headernavy>ul>li:last-child').click(function () {
        $(location).prop('href','../html/about-us.html')
    })
  $('.headernavy>ul>li:eq(5)').click(function () {
    $(location).prop('href','../html/expert.html')
  })
  $('.headernavy>ul>li:eq(1)').click(function(){
      $(location).prop('href','../maindex.html')
  })
  $('.headernavy>ul>li:eq(2)').click(function(){
    $(location).prop('href','../html/wbfw.html')
  })
  $('.headernavy>ul>li:eq(4)').click(function(){
    $(location).prop('href','../html/fwhy.html')
  })
  $('.headernavy>ul>li:eq(5)').click(function(){
    $(location).prop('href','../html/expert.html')
  })
  $('.headernavy>ul>li:eq(6)').click(function(){
    $(location).prop('href','../html/coroperateCase.html')
  })
})