function fibonacci(n) {
    if (n <= 1) {
      return n;
    } else {
      return fibonacci(n - 1) + fibonacci(n - 2);
    }
  }
  console.log("fibonacci(1)=",fibonacci(1))
  console.log("fibonacci(2)=",fibonacci(2))
  console.log("fibonacci(3)=",fibonacci(3))
  console.log("fibonacci(4)=",fibonacci(4))
  console.log("fibonacci(8)=",fibonacci(8))