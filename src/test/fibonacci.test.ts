import {Fibonacci} from "../main/fibonacci";

describe('example test', () => {
    it.each([
        [0,0],
        [1,1],
        [1,2],
        [2,3],
        [3,4],
        [5,5],
        [8,6],
        [13,7],
        [21,8],
        [34,9],
    ])("returns %i for position %i", (expectedFib:number, fibPosition: number) => {
        let f: Fibonacci = new Fibonacci();
        expect(f.fibonacci(fibPosition)).toBe(expectedFib);
    })
})
