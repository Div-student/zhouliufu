$(function(){
  let location = ['深圳','上海','南京','成都']
  let businessData = ['中国人寿','中国产险','平安养老院','平安健康险','平安信托','平安资产管理','平安保险海外控险','平安银行','平安证券']
  let delivery = $('.delivery')
  let business = $('.business')
  let introduce = $('.introduce')
  for(let i=0; i<4; i++) {
    let divfirst = $('<div></div>')
    for(let j=0; j<2; j++){
      let divsecond = $('<div></div>')
      if(j===0){
        divsecond.text(location[i])
      }
      else {
        divsecond.text('交付中心')
      }
      divsecond.addClass('locationText')
      divfirst.append(divsecond)
    }
    delivery.append(divfirst)
  }
// 平安业务
  for(let i=0; i<businessData.length-1; i++){
    let divfirst = $('<div></div>')
    for(let j=0; j<2; j++) {
      let divsecond = $('<div></div>')
      if(j===0) {
        divsecond.text(businessData[i])
        divsecond.css({'color':'#039e92'})
      }
      else if(i === 4) {
        divsecond.text(businessData[businessData.length-1])
        divsecond.css({'margin-top':'32px','color':'#039e92'})
      }
      divfirst.append(divsecond)
    }
    business.append(divfirst)
  }
  // 公司介绍，外包企业介绍
  for(let i=0; i<4; i++) {
    let divfirst = $('<div></div>')
    for(let j=0; j<4; j++) {
      if(i ===0){}
      else{
      }
    }
  }
})