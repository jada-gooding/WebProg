const merger = require('./merge');

var1 = ['Bat', 'Wonder', 'Iron', 'Bruce', 'Super']; 
var2 = ['man', 'Woman', 'Man', 'Banner', 'Man'];

function test_mergeHandler(){
    return merger.mergeHandler(var1, var2, merger.merge);
}
console.log(test_mergeHandler());

function test_merge2Single(){
    return merger.merge2Single(var1, var2);
}
console.log(test_merge2Single());

function test_merge2Object(){
    return merger.merge2Object(var1, var2);
}
console.log(test_merge2Object());

// const testFuncMerger = testMerge();
// function testMerge() {
//     return [
//      test_mergeHandler,
//      test_merge2Single,
//      test_merge2Object
//     ].forEach(func => {
//         func.call();
//     });
// }

