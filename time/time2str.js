
function getWeek(itemTime){
  var obj = new Object();
  var mydate = new Date(itemTime);
  var timeStr = (mydate.getHours() >= 10 ? mydate.getHours() : '0' + mydate.getHours()) + '：' + (mydate.getMinutes() >= 10 ? mydate.getMinutes() : '0' + mydate.getMinutes());
  var myddy = mydate.getDay();//获取存储当前日期
  var weekday = ["周日", "周一", "周二", "周三", "周四", "周五", "周六"];
  if(mydate.getDate() == new Date().getDate()){
    obj.date = '今天'
  }else{
    obj.date = itemTime.toString().slice(0,10)
  }
  obj.time = '(' + weekday[myddy] + ') ' + timeStr + ' ';
  return obj;
  /*
 	obj:{
 		date: '今天' || 2018-09-09,
 		time: '（周日） 10:00'
 	}
   * */
}