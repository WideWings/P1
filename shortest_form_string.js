var source = "xyz";
var target = "xzyxz";

//main function
function substring(source, target){
  var num_sub_sequences = 0;
  var all_sub_strings = [];
  var remaining = target;
  while (remaining.length > 0){
    var sub_sequence = "";
    var i = 0;
    var j = 0;
    while (i < source.length && j < target.length) {
      if (source.charAt(i++) == remaining.charAt(j)){
        sub_sequence = sub_sequence.concat(remaining.charAt(j++));
      }
    }

    if (sub_sequence.length == 0) {
      return -1;
    }

    all_sub_strings = all_sub_strings.concat(sub_sequence);
    num_sub_sequences++;
    remaining = remaining.substring(sub_sequence.length);
  }
  
  console.log("All sub strings:", all_sub_strings);
  return num_sub_sequences;
}

console.log('Source:', source);
console.log('Target:', target);

console.log(substring(source, target));
