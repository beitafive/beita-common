//判断是否 时间是否过期
function timeLose(itemTime){
  var nowTime = new Date();
  if(Date.parse(nowTime) >= Date.parse(itemTime)){
    return true		//过期
  }else{
    return false	//未过期
  }
}

//判断 日期 是不是低于60分钟
function getOneHour(itemTime){
  var nowTime = Date.parse(new Date())/1000;
  var createTime = Date.parse(new Date(itemTime))/1000;
  var step = nowTime - createTime;
  if(step>=3600){
    return itemTime
  }else{
    return Math.ceil(step/60) + '分钟前发布'
  }
}