function repeat(str, num) {
  //var to hold string that gets pushed
  var times = [];
  //loop through the amount specified by num
  for(var i = 0; i < num; i++) {
    //push string to times variable num amount of times
    times.push(str);
  }
  return times.join("");//join the array into a string
}

repeat("abc", 3, "");