"use strict"

function quicksort(ar){
	if(ar.length<=1)return ar;
	let cNum = ar.splice(Math.floor(ar.length/2),1);
	let left = [],right = [];
	for(var i=0;i<ar.length;i++){
		if(ar[i] > cNum){
			right.push(ar[i])
		}else{
			left.push(ar[i])
		}
	}
	return sport(left).concat(cNum,sport(right))
} 