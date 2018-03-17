const assert = require('assert');
const utils = require('../js/util');


function test_generateEven(){
    return utils.generateEven(20);
}
console.log(test_generateEven());


function test_getSize(){
    var arr=[2,4,3,5,6,7,3,2,1,4,0,5];
    // var arr=[]
    return utils.getSize(arr);
}
console.log(test_getSize());


function test_addTo(){
    var val =20;
    var arr =[1,3,4,6,4,3,54,77,6,5];
    var pos = 2;
    return utils.addTo(arr,val,pos)
}
console.log(test_addTo());


function test_enqueue(){
    var arr=[2,4,6,8,10];
    var x = 12;
    return utils.enqueue(arr,x);
}
console.log(test_enqueue());

function test_dequeue(){
    var arr=[5,4,6,7,9];
    return utils.dequeue(arr)
}
console.log(test_dequeue())


function test_addToObj(){
    var obj = {loc, val}
    var val = "John Doe";
    var loc =0;

    return utils.addToObj(obj,loc,val)
}
console.log(test_addToObj())



function test_JSsort(){
    var arr =[100,5,31,2,44,40,7,55,4,18];
    asc= false;
    return utils.JSsort(arr,asc)
}
console.log(test_JSsort())


function test_flatten(){
 var obj = {
    id: 2602,
    name: "Web Tech",
    year: 2
 };
 return utils.flatten(obj);
}
console.log(test_flatten())

// const testFunction = testUtil();
// function testUtil() {
//     return [
//         test_generateEven,
//         test_getSize,
//         test_addTo,
//         test_enqueue,
//         test_dequeue,
//         test_addToObj,
//         test_JSsort,
//         test_flatten
//     ].forEach(func => {
//         func.call();
//     });
// }

