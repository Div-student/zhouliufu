$(function () {
    // 获取地区字典表
    $.ajax({
        url: "http://demo.xiangmingit.com:9082/areadict/list",
        type: "post",
        data: {'parentCode': ""},
        contentType: "application/json/text",
        success: function (result) {
            alert('成功')
        },
        fail: function (result) {
            alert('失败')
        }
    });
})
