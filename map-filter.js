// // Square of array
// const numbers=[3,4,5,6]
// const output=[]
// for(let i=0;i<numbers.length;i++){
//     const element=numbers[i];
//     const result=element*element;
//     output.push(result);
// }
// console.log(output);

// // using map tos square .function can be passed in map .map array dibe
// map hcche array er mddhe looping kore prttkta element k nibe then baki ta order obnujay kaj korbe. one kind of for loop er kaj ta .map die kroa jay
// const numbers=[3,4,5,6]

// const result= numbers.map(function square(element){
//     return element*element;
// })
// console.log(result);
// // using arrow function

// const square= element => element*element
// console.log(square);




// map function e parameter,array,index pass kora jay ! example : 
// const numbers=[3,4,5,6]

// numbers.map(function square(element,index,array){
//     console.log(element,index,array);
// })
// // or array
// const numbers=[3,4,5,6]
// const result= numbers.map(x=>x * x)
// console.log(result);


// filter ; lets i want even numbers 

const number=[2,3,4,5,6,7]
const bigger = number.filter(x=> x>5)
// prottekta value nao ebong dekho je 5 er chaite boro kina . filter array return kore ! alternative of filter is "Find"
console.log(bigger);

const smaller= number.find(x=> x>5)
console.log(smaller); 
// find only ekta value show kore ,jeta at first confition fillup korbe shetai find hbe

