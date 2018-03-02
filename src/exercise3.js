const _ = require("lodash");

const meeteek = input => {
  console.log('test 3',input[0].sex);
  if (_.includes(input.sex, input.sexApproved) === false ) {
    return 0;
  }
};

module.exports = {
  title: "Exercise 3",
  run: meeteek
};
