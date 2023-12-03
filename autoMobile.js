// Constructor function for Automobile
function Automobile(make, model) {
    this.make = make;
    this.model = model;
  }

  // general information for Automobile
  Automobile.prototype.displayInfo = function () {
    console.log(`Make: ${this.make}, Model: ${this.model}`);
  };

  // Constructor function for fourWheeler, inheriting from Automobile
  function FourWheeler(make, model, numOfDoors) {
    // using parent constructor as call() to set make and model
    Automobile.call(this, make, model);

    this.numOfDoors = numOfDoors;
  }

  // Use Object.create() to set up prototype chain for FourWheeler
  FourWheeler.prototype = Object.create(Automobile.prototype);


  FourWheeler.prototype.displayDoorsInfo = function () {
    console.log(`Number of Doors: ${this.numOfDoors}`);
  };

  //  instances of FourWheeler
  let sedan = new FourWheeler('Toyota', 'Camry', 4);
  let suv = new FourWheeler('Honda', 'CR-V', 5);
  let jeep = new FourWheeler('Mahindra', 'Thar', '4');
  let hatchback = new FourWheeler('Mercedes-Benz','G-wagon','5');

  // Using inherited methods
  sedan.displayInfo();
  sedan.displayDoorsInfo();

  jeep.displayInfo();
  jeep.displayDoorsInfo();

  hatchback.displayInfo();
  hatchback.displayDoorsInfo(); 

  suv.displayInfo();
  suv.displayDoorsInfo();