"use strict"

function quicksort(arr){
	if(arr.length<=1)return arr;
	let cNum = arr.splice(Math.floor(arr.length/2),1);
	let left = [],right = [];
	for(varr i=0;i<arr.length;i++){
		if(arr[i] > cNum){
			right.push(arr[i])
		}else{
			left.push(arr[i])
		}
	}
	return quicksort(left).concat(cNum,quicksort(right))
} 
