$(function () {
  $('body').css({fontFamily: "微软雅黑",fontSize: '14px', textAlign: 'left', color: '#666'})
  $('.header_top').css({height:'35px',lineHeight:'35px',background:'#f0f0f0',padding:'0 50px'})
  $('.header_top_left').css({float:'left',height:'20px',lineHeight:'20px',padding:'8px 0 7px'})
  $('.header_top_left>span').css({marginRight:'50px'})
  $('.header_top_right').css({float:'right',height:'20px',lineHeight:'20px',padding:'8px 0 7px'})
  $('.header_top_right>span').css({marginLeft:'30px'})
  $('.header_title>img').css({margin:'10px 0 0 20px'})
  $('.header_title_right').css({width:'240px',float:'right',margin:'20px 40px 0 0'})
  $('.header_title_right>input').css({width:'240px',height:'30px'})
  $('.header_title_right>span').css({position:'relative',display:'inline-block',margin:'0 20px 10px 0',})
  //菜单
  $('.header_menu>ul').css('marginTop','20px')
  $('.header_menu li').css({listStyle:'none',display:'inline-block',
  padding:'10px 80px',cursor:'pointer'})
  //商品详情鼠标移入效果
  $('.pic>div:first,.pic>div:last').on({
    mouseover:function(){
      $('.pic>div:first').css({width:'475px'})
      $('.pic>div:last').css({width:'475px'})
      $('.sPic').css('display','block')
      $('.sPic').on({mouseover:function(){
        $('.sPic').css({border:'2px solid #DAB866'})
      }}),
      $('.sPic').on({mouseout:function(){
        $('.sPic').css('border','none')
      }})
    },
    mouseout:function(){
      $('.pic>div:first').css({width: '366px'})
      $('.pic>div:last').css({width: '366px'})
      $('.sPic').css('display','none')
    }
  })
  //现货、定制底边框添加、删除
  $('.goods>span').on({click:function(){
      $('.goods>span').removeClass('bord')
      $(this).addClass('bord')
    }})
  //导航按钮的高亮切换
  $('.nav > div:first button').on({click:function(){
    $('.nav > div:first button').removeClass('back')
    $(this).addClass('back')
  }})
  //头部导航栏系列吐司
  $('.header_menu li:eq(3), .set_box').hover(function(){
    $('.set_box').css('display','block')
  },function(){
    $('.set_box').css('display','none')
  })
  //点击显示/隐藏更多列表
  $('.open').click(function(){
    $('.allSort>div:eq(1)').slideDown(500)
    $('.open').text('收起更多')
     if( $('.allSort>div:eq(1)').attr('style') === 'display: block;') {
      $('.allSort>div:eq(1)').slideUp(500)
      $('.open').text('展开更多')
    }
  })
  
})