function produceDrivingRange(blockRange){
  return function (start, destination){
    const startFrom = parseInt(start.replace('th', ''));
    const destinationTo = parseInt(destination.replace('th', ''));
    let trip = Math.abs(startFrom - destinationTo)
    if (trip <= blockRange) {
      return `within range by ${(blockRange - trip)}`;
    } else {
      return `${trip - blockRange} blocks out of range`;
    }
  }
}

function produceTipCalculator(percentage) {
  return function(fare) {
    return (fare * percentage);
  }
}

function createDriver() {
  let driverId = 0;
  return class {
    constructor(name) {
      this.name = name;
      this.id = ++driverId;
    }
  }
}
