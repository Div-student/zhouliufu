/**
 * Created by THINK on 2018/9/12.
 */
$(function () {

    // var provinceList = ['北京','天津','广西']
    // for(var i=0;i<provinceList.length;i++){
    //     var subLi = '<li>'+provinceList[i]+'</li>'
    //     $('.sell>ul>li>ul:eq(0)').append(subLi)
    // }
    // //选择店铺
    // $('.sell>ul>li').each((function () {
    //     $(this).hover(function () {
    //         $(this).find('ul').show()
    //         $(this).css('border','solid 1px red')
    //     },function () {
    //         $(this).find('ul').hide()
    //     })
    // }))
    $('#post').click(function () {
        alert(12)
        var url = 'http://demo.xiangmingit.com:9082/realstore/list'
        $.post(url,function (data) {
        })
    })


})