class ElectricalDevices {
    constructor(name, brand, power) {
        this.name = name;
        this.brand = brand;
        this.power = power;
        this.turnOn = false;
    }
    getDescription() {
        console.log (`${this.name}: brand - ${this.brand}, power - ${this.power} W`);
    }
    getTurnOn() {
        this.turnOn = true;
    }
    getPower() {
        if (this.turnOn) {
            console.log (`${this.name} is turn on`);
            return this.power;
        }
        else {
            console.log (`${this.name} is turn off`);
            return 0;
        }
    }
}
  
class KitchenDevices extends ElectricalDevices {
    constructor(name, brand, power, origin){
        super(name, brand, power);
        this.origin = origin;
        this.place = 'kitchen';
    }	
    getOrigin() {
        console.log (`Country of origin - ${this.origin}`)
    }
}
  
const kettle = new KitchenDevices('Kettle', 'Xiaomi', 1800, 'China');
const fridge = new KitchenDevices('Fridge', 'Hotpoint Ariston', 200, 'Italy')
const dishwasher = new KitchenDevices('Dishwasher', 'Bosch', 650, 'Germany')
  
kettle.getVolume = function(volume) {
    console.log (`The volume of the ${this.name} is ${volume} liters`);
}
fridge.getHeight = function(height) {
    console.log (`The height of the ${this.name} is ${height} meters`);
}
dishwasher.getCapacity = function(capacity) {
    console.log (`The capacity of the ${this.name} is ${capacity} sets of dishes`);
}
  
kettle.getDescription()
kettle.getOrigin()
kettle.getVolume(1.5)
fridge.getDescription()
fridge.getOrigin()
fridge.getHeight(2)
dishwasher.getDescription()
dishwasher.getOrigin()
dishwasher.getCapacity(10)
   
fridge.getTurnOn()
dishwasher.getTurnOn()
   
const getPowerSum = function() {
    let sum = 0;
    sum = kettle.getPower() + fridge.getPower()+ dishwasher.getPower();
    if (sum === 0) {
        console.log ('All electrical devices are off');
    }
    else {
        console.log (`The power of all included electrical devices is ${sum} watts`);
    }
}
getPowerSum ()
