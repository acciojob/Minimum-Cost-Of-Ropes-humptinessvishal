function compare(a, b) {
	if (a < b) {
		return -1;
	}
	else if (a > b) {
		return 1;
	}
	else {
		return 0;
	}
}

function calculateMinCost() {
  //your code here
	let str=document.getElementById('rope-lengths').value.split(",");
	let arr=str.map((str)=>parseInt(str));  
	let temp=0;
	arr=arr.sort(compare);
	while(arr.length>=2){
		let sum=arr[0]+arr[1];
		let arr2=[];
		arr2.push(sum);
		for(let i=2;i<arr.length;i++){
			arr2.push(arr[k]);
		}
		arr2=arr2.sort(compare);
		arr=[...arr2];
		temp=temp+sum;
	}
	// console.log(total);
	let result=document.getElementById('result');
	result.innerHTML=temp;
}