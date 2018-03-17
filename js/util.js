function generateEven(n){
	var arr=[];

	for(var i=2;i<=n;i+=2)
		arr.push(i);
	return arr;
}

function getSize(arr){
	var size = arr.length;
	return size;
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

function addToObj(obj,loc,val){
	obj.loc= loc;
	obj.val =val;
	return obj;
}


function JSsort(arr,asc){ // asc could be a boolean here
	if(asc==true){
		return arr.sort();
	}		
	else
		return arr.sort(function(a,b){return b>a});
}

function displayAll(obj){
	for(i in obj){
		console.log(i,obj[i]);
	}
}

function flatten(obj){
	return JSON.stringify(obj);
}

if (module){
	module.exports ={
		'generateEven': generateEven,
		'getSize': getSize,
		'addTo': addTo,
		'enqueue':enqueue,
		'dequeue': dequeue,
		'addToObj': addToObj,
		'JSsort': JSsort,
		'flatten': flatten,
	}
}


