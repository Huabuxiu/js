
var testArray = ['1','2','3'];

console.log(testArray);

var ansArray = testArray.map(function(i){
  var obj = {};
  obj.label = i.toString();
  obj.value = i.toString();
  return obj;
});

console.log(ansArray);