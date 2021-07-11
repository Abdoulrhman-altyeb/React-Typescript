import react from 'react';

// type arr = Array<number>
// type arrN = number[]
const last =<T>(arr:Array<T>):T => {
return arr[arr.length - 1];
}
const l = last(['a', 'b', 'b']);
const l2 = last([1, 2, 3]);
const l3 = last([1, '2', 3, '4']);


const last2 = (arr: Array<string|number>) => {
    return arr[arr.length - 1];
}

const l4 = last([1, '2', 3, '4']);



const makeArr = (x:Array<number>, y:Array<string>) => {
    return [x, y]
}

const v = makeArr([0],['2'])