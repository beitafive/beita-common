/*
 * 应用在导师审核
 buildMonthList 生成月份列表
 getNowMonth  获取当前月份
 by beitafive
 * */
//buildMonthList
export function buildMonthList(minY=2018,minM=1){
	var arr = [];
	var nowD = new Date();				//当前时间
	var nowY = nowD.getFullYear();		//当前年份
	var nowM = nowD.getMonth()+1;		//当前月份
	var nowDay = nowD.getDate();		//当前日期
	var max = (nowY - minY)*12+nowM;	//循环最大值 限制
	if(nowDay>=15){
		max +=1;
	}
	for(var i=minM;i<max;i++){
		let obj = new Object();
		if(i>12){
			if(i%12==0){
				obj.label = minY+Math.floor(i/12)+'年'+(i-(12*Math.floor(i/12))+12)+'月';
				obj.value = minY+Math.floor(i/12)+'-'+(i-(12*Math.floor(i/12))+12);
				arr.push(obj)
				continue;
			}
			obj.label = minY+Math.floor(i/12)+'年'+((i-(12*Math.floor(i/12)))<10?'0'+(i-(12*Math.floor(i/12))).toString():(i-(12*Math.floor(i/12))))+'月';
			obj.value = minY+Math.floor(i/12)+'-'+((i-(12*Math.floor(i/12)))<10?'0'+(i-(12*Math.floor(i/12))).toString():(i-(12*Math.floor(i/12))));
			arr.push(obj)
			continue;
		}
		obj.label = minY+'年'+(i<10?'0'+i.toString():i)+'月'
		obj.value = minY+'-'+(i<10?'0'+i.toString():i);
		arr.push(obj)
	}
	return arr;
}


export function getNowMonth(){
	var times = new Date();
	var year = times.getFullYear();
	var month = times.getMonth()+1;
	if(times.getDate()<15){
		if(month == 1){
			return year-1+'-'+'12';
		}
		month -= 1;
		return year+'-'+(month<10?'0'+month.toString():month)
	}else{
		return year+'-'+(month<10?'0'+month.toString():month)
	}
}
