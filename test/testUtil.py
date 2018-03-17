from util import *


def test_generateEven():
    return generateEven(20)
print (test_generateEven())


def test_getSize():
    var = [2,3,4,2,1]
    var1 = len(var)
    return var1
print (test_getSize())

def test_addTo():
    arr = [2,4,6,8]
    val = 12
    pos= '0'
    return addTo(arr,val,pos)
print (test_addTo())

def test_enqueue():
    arr = [3,5,7,9]
    val = 11
    return enqueue(arr,val)
print (test_enqueue())

def test_dequeue():
    arr= [1,3,5,7,9]
    return dequeue(arr)
print (test_dequeue())

def test_addToObj():
    loc = 0
    val = 'John Doe'
    obj ={loc, val}
   
    return addToObj(obj,loc,val)
print (test_addToObj())


def test_JSsort():
    arr =[43,56,3,2,1,5,66,7,5,4,33,32,23,]
    # arr=['john','alan','ben','sam']
    # arr=['tom','ben','john',8,10,1]
    asc= False
    return JSsort(arr,asc)
print (test_JSsort())


def test_flatten():
    id = 2602
    name = 'Web Tech'
    year =2
    obj = {'id': id, 'name': name, 'year': year}
    return flatten(obj)
print (test_flatten())
