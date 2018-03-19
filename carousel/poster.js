//create by beitafive

//引入路由
import router from '../router'

//对象方法
const posters = {
	showPoster:(imgs,hrefs,widths,heights)=>{
		if(imgs==''||hrefs==''){
			return
		}
		var startX,endX;   //触摸开始和结束位置
		let app = document.getElementById("app")
		let leftCount = 0; 	//marginleft值
		//获取触摸开始位置
		const getStart = (event)=>{
			startX = event.changedTouches[0].clientX;
		}
		//获取触摸结束位置
		const getEnd = (event)=>{
			endX = event.changedTouches[0].clientX;
			uls.style.animation = '';
			if(startX < endX){
				//控制marginleft大小
				if(leftCount == 0){
					return;
				}
				leftCount = Number(leftCount)+widths;
				leftCount = Number(leftCount).toFixed(1);
				uls.style.marginLeft = leftCount+"rem";
			}else if(startX > endX){
				//控制marginleft大小
				if(leftCount == maxC){
					return; 
				}
				leftCount -= widths;
				uls.style.marginLeft = leftCount+"rem";
			}
		}
		//禁止触摸滑动事件
		const blank = (event)=>{
			event.preventDefault();
		}
		app.addEventListener("touchmove",blank,false);
		// 遮罩
		let tips = document.createElement("div");
		tips.className = "w-poster-tips"
		app.appendChild(tips);
		// 父元素
		let bigBox = document.createElement("div");
		bigBox.className = "w-posterGo";
		bigBox.style.width = widths+"rem" || "80%";
		bigBox.style.height = heights+"rem" || "80%";
		app.appendChild(bigBox);
		bigBox.addEventListener("touchstart",getStart,false)
		bigBox.addEventListener("touchend",getEnd,false)
		//关闭按钮
		
		let cB = document.createElement("i");
		cB.className = "iconfont w-closeMe";
		cB.innerHTML = "&#xe688;";
		//关闭按钮点击事件
		cB.onclick = ()=>{
			app.removeChild(bigBox);
			app.removeChild(tips);
			app.removeChild(cB);
			//开启触摸滑动事件
			app.removeEventListener("touchmove",blank,false);
		}
		
		// 创建子元素
		let imgArr = imgs.split(",");
		var hrefArr = hrefs.split(",");
		var count = imgArr.length;
		var maxC = -widths*(count-1).toFixed(1);
		let uls = document.createElement("ul");
		uls.style.width = count*widths + "rem" || count*100 + "%";
		uls.style.marginLeft = 0+"rem";
		uls.style.marginRight = 0+"rem";
		uls.style.height = heights+"rem" || "100%";
		switch (imgArr.length){
			case 2:
				uls.style.animationName = "animate_two";
				uls.style.animationDuration = "10s";
				uls.style.animationIterationCount="infinite";
				uls.style.animationDirection="alternate"
				break;
			case 3:
				uls.style.animationName = "animate_three";
				uls.style.animationDuration = "12s";
				uls.style.animationIterationCount="infinite";
				uls.style.animationDirection="alternate"
				break;
			case 4:
				uls.style.animationName = "animate_four";
				uls.style.animationDuration = "14s";
				uls.style.animationIterationCount="infinite";
				uls.style.animationDirection="alternate"
				break;
			case 5:
				uls.style.animationName = "animate_five";
				uls.style.animationDuration = "16s";
				uls.style.animationIterationCount="infinite";
				uls.style.animationDirection="alternate"
				break;
			default:
				break;
		}
		
		
		//循环遍历第一个参数imgs；创建出li && img标签
		for(let i=0;i<count;i++){
			let lis = document.createElement("li");
			let img = document.createElement("img");
			lis.style.width = widths + "rem" || 100/count + "%";
			lis.style.height = "100%";
			lis.style.borderRadius = "5px";
			lis.style.float = "left";
			lis.style.overflow = "hidden";
			lis.onclick = ()=>{
				//跳转时  需要清除元素和监听事件
				app.removeChild(bigBox);
				app.removeChild(tips);
				app.removeChild(cB);
				app.removeEventListener("touchmove",blank,false);
				if(hrefArr[i].startsWith("http")){
					window.location.href = hrefArr[i];
				}else if(hrefArr[i].includes("/")){
					router.push(hrefArr[i]);					
				}else{
					router.push({path:'goodsdetail',query:{id:hrefArr[i]}})
				}
			}
			img.src = imgArr[i];
			img.style.width = "100%";
			lis.appendChild(img);
			uls.appendChild(lis);
		} 
		if(imgArr.length>1){
			//左边滑动按钮
			let leftI = document.createElement("i");
			leftI.className = "iconfont w-goleft";
			leftI.innerHTML = "&#xe600;";
			leftI.onclick = ()=>{
				//控制marginleft大小
				if(leftCount == 0){
					return;
				}
				leftCount = Number(leftCount)+widths;
				leftCount = Number(leftCount).toFixed(1);
				uls.style.animationPlayState="paused";//暂停自动播放
				uls.style.animation = '';
				uls.style.marginLeft = leftCount+"rem";
			}
			tips.appendChild(leftI)
			//右边滑动按钮
			let rightI = document.createElement("i");
			rightI.className = "iconfont w-goright";
			rightI.innerHTML = "&#xe602;";
			rightI.onclick = ()=>{
				//控制marginleft大小
				if(leftCount == maxC){
					return;
				}
				leftCount -= widths;
				uls.style.animationPlayState="paused";//暂停自动播放
				uls.style.animation = '';
				uls.style.marginLeft = leftCount+"rem";
			}
			tips.appendChild(rightI);
		}
		app.appendChild(cB);
		bigBox.appendChild(uls);
	}
}

//暴露
export default posters;