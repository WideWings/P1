var n = 4;
console.log(n);
var step_type = [1, 2];
console.log(step_type);

//Main Function
function step_ways(n, step_type){
  if (n==0) {
    //console.log('Step way concluded.');
    return 1;
  }
  var num_steps = 0;
  for (var i = 0; i < step_type.length; i++){
    if (n - step_type[i] >= 0) {
      //console.log('Steps left:', n - step_type[i]);
      num_steps = num_steps + step_ways(n - step_type[i], step_type);
    }
  }
  return num_steps;
}

console.log('Total number of ways:', step_ways(n, step_type));
