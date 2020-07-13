const carMakers = ['chevy', 'ford', 'toyota']

let carsByMake: string[][]

carsByMake = [
    ['camaro'],
    ['f150'],
    'corolla' // <- error
]

const thisCar = carMakers[0] // type inference


// help with 'map'
carMakers.map((car: string): string => car.toUpperCase())

// Flexible types
const importantDates: (string | Date)[] = []
importantDates.push('2013-10-10');
importantDates.push(new Date())
