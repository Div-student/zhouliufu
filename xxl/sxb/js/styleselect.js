    // 钻石隐藏列表数组
    var diamontarray = [
      {labels:"品类", contents:[]},
      {labels:"主石大小", contents:["不限", "301分以下", "30-39分", "40-49分", "50-59分", "59-99分", "1克拉以上"]},
      {labels:"价格", contents:["不限", "3000以下", "3000-6000", "6000-10000", "10000-20000", " 20000以上"]},
      {labels:"材质", contents:["EX", "VG", "GD", "FR"]}, 
   ]
   $(function(){
      // 循环生成钻石样式列表
     $.each(diamontarray, function (index, item) {
      var lis = $("<li><label><span>"+item.labels+"</span></label><div class=div"+index+"></div></li>")
      $(".diamentlist1").append(lis)
      $.each(item.contents, function(index1, item1){
        var contents1 = $("<span>"+item1+"</span>")
        $(".div"+index).append(contents1)
      })
    })
   })
    