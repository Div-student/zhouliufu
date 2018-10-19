//主要内容栏
$(function () {
    // 导航栏 -- 点击时高亮
    $('.main ul li a').on('click', function () {
        let $a = $(this);
        if ($a.data('anchor') ===
            window.location.href.slice(window.location.href.lastIndexOf("/") + 1).slice(0, -5)) {
            $a.addClass("cur");
        }
    })
})