class Vehicle {
    public beep(): void {
        console.log("beep")
    }

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

const vehicle = new Vehicle();

