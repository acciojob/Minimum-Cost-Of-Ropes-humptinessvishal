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
	let total=0;
	arr=arr.sort(compare);
	while(arr.length>=2){
		let sum=arr[0]+arr[1];
		let rem=[];
		rem.push(sum);
		for(let i=2;i<arr.length;i++){
			rem.push(arr[i]);
		}
		rem=rem.sort(compare);
		arr=[...rem];
		total=total+sum;
	}
	let result=document.getElementById('result');
	result.innerHTML=total;
}