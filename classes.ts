class Vehicle {
    constructor(public color: string) {}

    protected honk(): void { // protected methods can be inherited; private methods cannot
        console.log("bAAAAm") 
    }
};

class Car extends Vehicle {
    private drive(): void { // private methods can't be called outside of the class definition
        console.log("chugga chugga")
    }

    startDrivingProcess(): void {
        this.drive();
    }
}

const vehicle = new Vehicle('red');

console.log(vehicle.color)