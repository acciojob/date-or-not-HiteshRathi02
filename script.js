var isDate = function (input) {
  //   write your code here
	const date = input instanceof Date ? input : new Date(input);
  return date instanceof Date && !isNaN(date.getTime());
};

// Do not change the code below.
const input = prompt("Enter Date.");   
alert(isDate(input));
