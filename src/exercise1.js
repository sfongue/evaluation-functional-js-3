const moment = require("moment");

const sortProduct = input => {
  // Your future job begins here ...
  // var test = [];
  // input.forEach(function(element) { 
  //   var test1 = moment(element.dateAdded).year();
  //   console.log(test1);
  //   if(moment(element.dateAdded).year() >= 2000){
  //     var elements = element.split(',');
  //     var value = [elements[0], 'year: ' + moment(element.dateAdded).year(), "monthOfYear: "+ moment(element.dateAdded).month() + elements[2] ];
  //     test.push(value);
  //   }
  //   console.log('test:',test);
  // });
  // return test;
  return input.filter(value => moment(value.dateAdded).year() >= 2000);
};

module.exports = {
  title: "Exercise 1",
  run: sortProduct
};
