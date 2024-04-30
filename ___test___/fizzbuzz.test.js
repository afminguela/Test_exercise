import { fizzbuzz } from "../src/fizzbuzz";

test("debe testear que devuelva 'Fizz' si introduzco un 3", () => {
    let result = fizzbuzz(3);
    expect(result).toBe("Fizz");
})

test("debe testear que devuelva 'Buzz' si intrduzco un 5", () => {
    let result = fizzbuzz(5);
    expect(result).toBe("Buzz");
})

test("debe testear que devuelva 'Fizz' si introduzco un 18", () => {
    let result = fizzbuzz(18);
    expect(result).toBe("Fizz");
})

test("debe testear que devuelva 'Buzz' si introduzco un 50", () => {
    let result = fizzbuzz(50);
    expect(result).toBe("Buzz");
})

test("debe testear que devuelva 'FizzBuzz' si introduzco un 15", () => {
    let result = fizzbuzz(15);
    expect(result).toBe("FizzBuzz");
})

test ("debe testear que devuelva 'FizzBuzz' si introduzco 351", () =>{
     let result = fizzbuzz(351);
     expect (result).toBe("Fizz") 
})

test ("debe testear que devuelva 'introduce un número' si number no es un numero", () => {
    let result = fizzbuzz("patata");
    expect (result).toBe("Introduce un número")
})