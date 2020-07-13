// data structure representing several properties of a record

const drink = {
    color: 'brown',
    carbonated: true,
    sugar: 40,
}

const pepsi = [
    'brown',
    true,
    40,
] // this will accept strings, booleans, and numbers in arbitrary order

type Drink = [string, boolean, number];

const pepsiTuple: [string, boolean, number] = ['brown', true, 40] // this enforces type order
const sprite: Drink = ['clear', true, 30]

// tuples aren't used that often though, because objects provide more information for records most of the time

const carStats = {
    horsepower: 400,
    weight: 3354,
}

