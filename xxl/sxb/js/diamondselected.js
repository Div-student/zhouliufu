$(function(){
  // 按钮点击事件
  $(".buttons a").click(function(){
    $(".buttons a").removeClass("buttonsactive")
    $(this).addClass("buttonsactive")
  })

  //钻石详情图片鼠标移入事件
  $(".details-left").find("li").on("mouseover", function(){
    let indexs = $(this).index()-1
    $(".details-left>div:first-child img").attr({"src":"../png/round"+indexs+".png"})
    $(".details-left>div:last-child span").css({border: "1px solid #e5e5e5"})
    $(this).find("span").css({border:"1px solid #DAB866"})
  })

  // 查看证书的点击事件
  $(".certified a").click(function(){
    $(".mask").removeClass("hidden")
  })
  $(".close").click(function(){
    $(".mask").addClass("hidden")
  })
  
  //切工的隔行错色设置
  $(".cutright ul li:odd").css({background:"#F2F2F2"})
  $(".cutright ul li").eq(1).css({background:"white", height:"80px", lineHeight:"80px"})
})


