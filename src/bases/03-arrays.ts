
const numeriArray: number[] = [1, 2, 3, 4, 5];

numeriArray.push(6)

const numeriArray2 = [ ...numeriArray];

numeriArray2.push(7)

const numeriArray3 = numeriArray.map( valorem => (valorem * 2.3456).toFixed(1) )

console.log(numeriArray3)