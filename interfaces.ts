// interface + class combo is how we get strong code reuse within TS
// what is an interface: a custom type, describing property names and value types of an object

const oldCivic = {
    name: 'civic',
    year: 2000,
    broken: true,
    summary(): string {
        return `${this}`;
    }
}

interface Vehicle {
    name: string;
    year: number;
    broken: true;
    summary(): string;
}

const printVehicle = (vehicle: { name: string, year: number, broken: boolean, summary: () => string }): void => {
    console.log(`Name: ${vehicle.name}, year: ${vehicle.year}, broken: ${vehicle.broken}`)
};

const printVehicleInterface = (vehicle: Vehicle): void => {
    console.log(vehicle);
}

printVehicle(oldCivic);