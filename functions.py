def generateEven(n):
	arr=[]

	for i in range(1,n):
		if(i%2==0):
			arr.append(i)
	return arr


def getSize(arr):
	print(len(arr))


def addTo(arr,val,pos):
	arr.insert(int(pos),val) 
	return arr

def enqueue(arr,val):
	arr.append(val)


def dequeue(arr):
	return arr.popleft()


def addToObj(obj,i,val):
	obj.update({i,val})
	
	return obj

def sort(arr,asc):
	if(asc)
		return sorted(arr)
	else
		return sorted(arr,reverse=True)


def flatten(obj):
	return str(obj)