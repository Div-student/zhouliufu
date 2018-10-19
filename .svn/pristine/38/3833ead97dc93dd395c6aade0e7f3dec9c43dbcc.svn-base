$(function() {
  // 实现图片切换
  function changeimg (a) {
    $('.ind').eq(a).fadeIn().siblings().fadeOut()
    $('.tab li').eq(a).addClass('boder').siblings().removeClass('boder')
  }
  // 定义一个变量
  var send = 0;
  changeimg (send);
  // 点击图片
    $('.tab li').on('clock',function() {
      debugger
      send = $(this).index();
      send ++;
      if (send>4) {
        send = 0;
      }
      changeimg (send);
    })
  })