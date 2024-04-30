import { trafficLamps } from "../src/trafficLamps";

test ( "Cuando la luz es roja debe preparar verde", () => {
    let result = trafficLamps("red")
    expect(result).toBe("green")
})

test ("cuando la luz es verde debe preparar amarillo", () => {
    let result = trafficLamps("green")
    expect(result).toBe("yellow")
})

test ("cuando la luz es amarilla debe preparar rojo",()=>{
    let result = trafficLamps("yellow")
    expect(result).toBe("red")
})


test ("cuando la luz es de otro color o no está o tiene un valor que no toca que ponga 'out of order'", () => {
    let result =trafficLamps(42)
    expect(result).toBe("out of order")
})