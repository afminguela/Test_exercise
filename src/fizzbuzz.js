const fizzbuzz = (number) => {
if (typeof number === "number"){
   
  return "Introduce un número"
} 
    if (number%15 === 0){
        return "FizzBuzz";
       } else if (number%5 == 0){
        return "Buzz";
       } else if(number%3 == 0){
        return "Fizz";
       }

    }
 export { fizzbuzz }