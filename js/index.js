let vehicleInventory = [];

addVehicle = () => {
    let vehicle = document.getElementById("vehicle").value
    let make = document.getElementById("make").value
    let model = document.getElementById("model").value
    let number = document.getElementById("number").value
    let condition = document.getElementById("condition").value

    let vehicleInventory = {
        vehicle: vehicle,
        make: make,
        model: model,
        number: number,
        condition: condition
      };

    console.log(vehicleInventory);

    document.getElementById("VehicleForm").reset();

}
