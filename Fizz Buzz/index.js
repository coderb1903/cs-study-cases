var fizzBuzz = function(n) {
    let returnArr=[];
   for (let i = 1; i <= n; i++) {
        let f = i % 3 == 0, b = i % 5 == 0;
        returnArr.push(f ? b ? "FizzBuzz" : "Fizz" : b ? "Buzz" : i.toString());
    } 
    return returnArr
};