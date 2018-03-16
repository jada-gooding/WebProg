function generateEven(n){
	var arr=[];

	for(var i=2;i<=n;i+=2)
		arr.push(i);
	return ar;
}

function getSize(arr){
	console.log(arr.length);
}

function addTo(arr,val,pos){
	arr.splice(parseInt(pos),0,val);
	return arr;
}

function enqueue(arr,val){
	arr.push(val);
	return arr;
}


function dequeue(arr){
	return arr.shift();
}

function addToObj(obj,i,val){
	obj.i="val";
	return obj;
}


function sort(arr,asc){ // asc could be a boolean here
	if(asc)
		arr.sort(function(a,b){return a-b});
	else
		arr.sort(function(a,b){return b-a});
	return arr;
}

function displayAll(obj){
	for(i in obj){
		console.log(i,obj[i]);
	}
}

function flatten(obj){
	return JSON.stringify(obj);
}