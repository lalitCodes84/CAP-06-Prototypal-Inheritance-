 // Define the Vehicle constructor function
 function Vehicle(brand, model, speed, fuelType) {
    this.brand = brand;
    this.model = model;
    this.speed = speed;
    this.fuelType = fuelType;
  }

  // Add common methods to the Vehicle prototype
  Vehicle.prototype.accelerate = function() {
    this.speed += 10;
    updateVehicleInfo(this);
  };

  Vehicle.prototype.brake = function() {
    this.speed -= 5;
    updateVehicleInfo(this);
  };

  Vehicle.prototype.refuel = function() {
    console.log(`${this.brand} ${this.model} is refueling.`);
    updateVehicleInfo(this);
  };

  // Define the Car constructor function
  function Car(brand, model, speed, fuelType, numberOfWheels) {
    // Call the parent constructor (Vehicle) to inherit properties
    Vehicle.call(this, brand, model, speed, fuelType);
    this.numberOfWheels = numberOfWheels;
  }

  // Inherit methods from the Vehicle prototype
  Car.prototype = Object.create(Vehicle.prototype);

  // Add additional method for Car
  Car.prototype.honk = function() {
    console.log(`${this.brand} ${this.model} is honking.`);
  };

  // Define the Airplane constructor function
  function Airplane(brand, model, speed, fuelType, numberOfEngines, hasLandingGear) {
    // Call the parent constructor (Vehicle) to inherit properties
    Vehicle.call(this, brand, model, speed, fuelType);
    this.numberOfEngines = numberOfEngines;
    this.hasLandingGear = hasLandingGear;
  }

  // Inherit methods from the Vehicle prototype
  Airplane.prototype = Object.create(Vehicle.prototype);

  // Add additional method for Airplane
  Airplane.prototype.takeOff = function() {
    console.log(`${this.brand} ${this.model} is taking off.`);
  };

  // Create instances of Car and Airplane
  const myCar = new Car('Toyota', 'Camry', 0, 'Gasoline', 4);
  const myAirplane = new Airplane('Boeing', '747', 0, 'Jet', 4, true);

  // Function to update vehicle information on the HTML page
  function updateVehicleInfo(vehicle) {
    const vehicleInfoElement = document.getElementById(`${vehicle.model.toLowerCase()}Info`);
    vehicleInfoElement.innerHTML = `<strong>${vehicle.brand} ${vehicle.model}</strong><br>
      Speed: ${vehicle.speed} km/h<br>
      Fuel Type: ${vehicle.fuelType}`;
  }

  // Functions to demonstrate invoking methods
  function accelerateCar() {
    myCar.accelerate();
  }

  function brakeCar() {
    myCar.brake();
  }

  function refuelCar() {
    myCar.refuel();
  }

  function honkCar() {
    myCar.honk();
  }

  function accelerateAirplane() {
    myAirplane.accelerate();
  }

  function brakeAirplane() {
    myAirplane.brake();
  }

  function refuelAirplane() {
    myAirplane.refuel();
  }

  function takeOffAirplane() {
    myAirplane.takeOff();
  }