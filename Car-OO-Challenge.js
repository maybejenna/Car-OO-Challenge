//part 1

class Vehicle {
    constructor (make, model, year) {
        if (typeof make !== 'string' || typeof model !== 'string') {
            throw new Error("Make and model must be strings.");
        }
        if (typeof year !== 'number') {
            throw new Error("Year must be a number.");
        }
    this.make = make; 
    this.model = model; 
    this.year = year; 
    }
    honk() {
        return "Beep!"; 
    }
    toString() {
        return `The vehicle is a ${this.make} ${this.model} from ${year}."`;
    }
}

//part 2

class Car extends Vehicle {
    constructor (make, model, year) {
        this.make = make; 
        this.model = model; 
        this.year = year; 
        this.numWheels = 4
    }

}


//part 3

class Motorcycle extends Vehicle {
    constructor (make, model, year) {
        this.make = make; 
        this.model = model; 
        this.year = year; 
        this.numWheels = 2
    }
    revEngine() {
        return "VROOOM!";
    }
}

//part 4

class Garage {
    constructor(capacity) {
        this.vehicles = []; 
        this.capacity = capacity; 
    }
    add (newVehicle) {
        if (!(newVehicle instanceof Vehicle)) {
            return "Only vehicles are allowed in here!";
          }
        if (this.vehicles.length >= this.capacity) {
            return "Sorry, we're full.";
          }
        else {this.vehicles.push(newVehicle);
          return "Vehicle added!";
        }
    }
}

