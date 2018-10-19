/**
 * Created by THINK on 2018/9/11.
 */
$(function () {
    $(".lbhover1").hover(function(){
        $(".lbhover1").css('border', '1px solid #dab866')
        $(".lbhover2").css('border', '1px solid #e5e5e5')
        $(".lbhover3").css('border', '1px solid #e5e5e5')
        $(".exhbg").css('background-image','url("../imgs/round2.png")')
    });
    $(".lbhover2").hover(function(){
        $(".lbhover1").css('border', '1px solid #e5e5e5')
        $(".lbhover2").css('border', '1px solid #dab866')
        $(".lbhover3").css('border', '1px solid #e5e5e5')
        $(".exhbg").css('background-image','url("../imgs/pro10.png")')
    });
    $(".lbhover3").hover(function(){
        $(".lbhover1").css('border', '1px solid #e5e5e5')
        $(".lbhover2").css('border', '1px solid #e5e5e5')
        $(".lbhover3").css('border', '1px solid #dab866')
        $(".exhbg").css('background-image','url("../imgs/round3.png")')
    });
})