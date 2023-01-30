function smallestCommons(arr) {
    let [min,max] = arr.sort((a,b) => a - b);
  
    /*
     set new Array with all the values between the two first value in the given array
    */
    let newArr = [];
    for (let i = min; i <= max; i++) {
      newArr.push(i);
    }
  
    // array of primes number
    let primes = getPrimes(newArr[newArr.length - 1]);
  
    let arrOfVal = [];
    let val = [];
  
    // decomposing each number
    newArr.map(item => decompose(item));
  
    // decomposing function
    function decompose(num) {
  
      // if the num is equal to 1
      if (num == 1) {
        arrOfVal.push(val);
        val = [];
        return num;
      }
  
      // loop over all the primes
      let i = 0;
      while (i < primes.length) {
  
        // if the primes can divide the number
        if (primes[i] <= num && num % primes[i] == 0) {
          val.push(primes[i]);
          return decompose(num/primes[i]);
        }
        i++;
      }
    }
  
    return arrOfVal;
  }
  
  /* Find all prime numbers inferior to num given */
  function getPrimes(num) {
    let arr = [];
  
    for (let i = 2; i <= num; i++) {
      let divisorsFound = 0;
      for (let j = 1; j <= i; j++) {
        if (i % j == 0) {
          divisorsFound++;
        }
      }
  
      if (divisorsFound == 2) {
        arr.push(i);
      }
    }
  
    return arr;
  }
  
  console.log(smallestCommons([2,10]));