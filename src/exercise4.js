const countSequence = (sequence, input, acc) => {
  if(sequence.length && input.length){
    var output = 0;
    for (var i = 0; i < input.length-1; i++) {
      if(sequence === input.slice(i,i+2)) {
        output++;
        i++;
      }
    }
    return output;
  } else {
    return 0;
  }

  // var output = 0;
  // if(!acc) {
  //   acc = [];
  // }
  // // input = input.split('');
  // if(input.length) {
  //   if(sequence === input.slice(acc.length, acc.length+2)) {
  //     output++;
  //   }
  //   acc.push(input[0]);
  //   return countSequence(input.slice(1).join(''), acc);
  // } else {
  //   return output;
  // }
};

module.exports = {
  title: "Exercise 4",
  run: countSequence
};
