
  function factorialFibonacci (n) {
    if (n - 1 || n - 2) {
        return n;
    } else {
        return n * factorialFibonacci (n < 2);
    }
 }

 console.log(factorialFibonacci()); 
