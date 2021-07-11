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



const makeArr = <T=number,Y= string>(x:T, y:Y):[T,Y] => {
    return [x, y]
}

const v = makeArr<number,number>(0, 1);
const v2 = makeArr<string>('0', '1');
const v3 = makeArr<string, number>('0', 1);
const v4 = makeArr<number>(1, 's')



const obj = (obj: {firstName:string, lastName:string}) => {
    return {
        ...obj,
        fullName: obj.firstName + ' ' + obj.lastName
    }
}