// console.log(Math.pow(2,3))
// console.log(Math.round(5.5))
// console.log(Math.round(5.3))
// console.log(Math.round(5.6))
// console.log(Math.ceil(5.5))
// console.log(Math.floor(5.5))
// console.log(Math.sign(5.5))
// console.log(Math.sign(-6))
// console.log(Math.abs(-5.5))
// console.log(Math.sqrt(64))
// console.log(Math.random()*10_000)

// loops,if else, while, switch, iterable

// const num1 = 10
// const num2 = 15
// const isNight = true
// const resource = 50
// all condition needs needs to be true
// if(num1 > resource && num2 > resource && isNight === true){
    
//     console.log('successfull')
// }else{
//     console.log('fail')
// }
// // at leat one condition needs to be true
// if(resource >= 50 || isNight === true){
//     console.log('hello world')
// }

// if(resource > 50 && isNight !== true){
//     console.log('!!!!!')
// }else{
//     console.log('beauty')
// }

// if(resource > 50 && isNight !== true){
//     console.log('!!!!!')
// }else if(resource >= 50 && num1 >= 5) {
//     console.log('java')
// }else{
//     console.log('beauty')
// }
//=========================================================================
// switch case  // redux uses lots of switch case

function weekend (num){
    switch(num){
        case 0:
            return 'Saturday'
        case 1:
            return 'Sunday'
        case 2:
            return 'Monday'
        case 3:
            return 'Tuesday'
        case 4:
            return 'Wednsday'
        case 5:
            return 'Thursday'
        case 6:
            return 'Friday'
        
        default:
            return 'Not Valid Day'
    }
}

console.log(weekend(8))


// redux example
// export default function(state = [], action){
//     switch(action.type){
//         case GET_AGE_APPROPRIATE_OPTIONS:
//             return action.payload.data;
//         case GET_AGE_OPTIONS:
//             return action.payload.data;
//         case GET_BINDING_TYPE_OPTIONS:
//             return action.payload.data;
//     }
//     return state
// }

let text;
console.log(new Date().getDay())

switch(new Date().getDay()){
    case 6:
        text = 'Saturday'
        break
    case 0:
        text = 'Sunday'
        break
    default :
        text = 'is not weekend'
}

console.log(text)

function ageName(num){
    let name;
    switch(num){
        case 28: 
            name = 'Milad'
            break;
        case 18:
            name = 'Ali'
            break;
        case 23:
            name = 'Behrad'
            break;
        case 37:
            name = 'Professor'
            break
        default :
            name = 'Not Valid'
            
    }
    return name
}

console.log(ageName(50))


// for loop 
const foods = [
    'rice', 
    'chicken',
    'beef',
    'pizza',
    'burger',
    'sausage',
    'coffee',
    'sushi'
];
let foodText = ''
console.log(foods[0])
console.log(foods[1])
console.log(foods[2])
console.log(foods[3])

// foodText += foods[0] 
// foodText += foods[1]
console.log(foodText, '================')

// index loop
for(let i=0; i<foods.length; i++){
    foodText += `${foods[i]} `
    console.log(i)
}

console.log(foodText)

const person = {
    firstName: 'Milad',
    lastName: 'Jangjoo',
    age: 28
}

let text1 = ''
// for in good for objects loops

for(let prop in person){
    text1 += `${person[prop]} `
    console.log(prop)
}

console.log(text1)

let food2 = ''
for(let i in foods ){
    food2 += `${foods[i]} `
    console.log(i)
    console.log(food2)
}

console.log(food2)
let result = ''
for(let food of foods){
    result += `${food} `
    console.log(food)
}
console.log(result)

// ++i vs i++

//while and do while
let n = 0
let x = ''
while(n < 3){
    ++n
    x +=n
}
console.log(x)

let text2 = ''
let y = 0
do {
    text2 += y
    ++y
}while(y<5)

console.log(text2)
console.log(foods)
let text4 = ''
for(let i=0; i<foods.length; i++){
    if(i === 3){
        break
    }
    text4 += foods[i]
}



console.log(text4)

let text5 = ''
for(let i=0; i<foods.length; i++){
    if(i === 3){
        continue
    }
    text5 += foods[i]
}

console.log(text5)















