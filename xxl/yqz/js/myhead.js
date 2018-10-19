/**
 * Created by THINK on 2018/9/11.
 */
$(function () {
    $('body').css
    ({fontFamily: "微软雅黑",fontSize: '14px', textAlign: 'left', color: '#666'})
    $('.header_top').css
    ({height:'35px',lineHeight:'35px',background:'#f0f0f0',padding:'0 50px'})
    $('.header_top_left').css
    ({float:'left',height:'20px',lineHeight:'20px',padding:'8px 0 7px'})
    $('.header_top_left>span').css
    ({marginRight:'40px'})
    $('.header_top_right').css
    ({float:'right',height:'20px',lineHeight:'20px',padding:'8px 0 7px'})
    $('.header_top_right>span').css
    ({marginLeft:'30px'})

    $('.header_title>img').css
    ({margin:'10px 0 0 40px',width:'200px'})
    $('.header_title_right').css
    ({width:'240px',float:'right',margin:'20px 40px 0 0'})
    $('.header_title_right img').css
    ('verticalAlign','middle')
    $('.header_title_right>input').css
    ({width:'220px',height:'30px'})
    $('.header_title_right>span').css
    ({position:'relative',display:'inline-block',margin:'0 20px 10px 0'})
    //菜单
    $('.header_menu>ul').css
    ('marginTop','20px')
    $('.header_menu li').css
    ({listStyle:'none',display:'inline-block',
        padding:'10px 70px',cursor:'pointer',fontSize:'18px'})

    $('.didi:eq(0)').css('display','block')
    //$('#logo').draggable()
    //改变字体颜色

    // 图片轮播
    // var index = 0
    // var len = $('.didi').length
//     setInterval(function () {
//         index++
//         if(index == len){
//             index=0
//         }
//         $('.didi').eq(index).css('display','block')
//         $('.didi').eq(index).siblings().css('display','none')
//     },1000)
})
$(function () {
    var idx = 0
    var len = $('.header_pic>div>span').length
    $('.header_pic>div>span').each(function (index,item) {
        $(this).mouseover(function () {
            $(this).css('background','blue').siblings().css('background','lightgrey')
            $('.header_pic li').eq(index).find('img').css('display','block')
            $('.header_pic li').eq(index).siblings().find('img').css('display','none')
            idx = index
        })
    })
    // 定义图片跳转 的方法
    var tt = function () {
        idx++
        if(idx == len){
            idx = 0
        }
        $('.header_pic>div>span').eq(idx).trigger('mouseover')
    }
    // 全局定时器
    var timer = setInterval(tt,2000)
    $('.header_pic img').each(function () {
        $(this).hover(function () {
            // 鼠标移入时清除定时器
            clearInterval(timer)
        },function () {
            // 鼠标移除时设置定时器
            timer = setInterval(tt,2000)
        })
    })
})



