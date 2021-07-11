import react from 'react';

// type arr = Array<number>
// type arrN = number[]
const last =<T>(arr:Array<T>):T => {
return arr[arr.length - 1];
}
const l = last(['a', 'b', 'b']);
const l2 = last([1, 2, 3]);
const l3 = last([1,'2',3,'4'])


