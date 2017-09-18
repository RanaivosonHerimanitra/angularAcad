//declaration d'une interface
interface ICar {
    id: number;
    brand: string;
    model: string;
}
//
function ShowCar(car:ICar): string {
	return "This is car: " + car.brand + " " + car.model;
}
//objet
var vehicle = {
    id:1,
    brand: "Toyota",
    model:"Prius"
};
var result = ShowCar(vehicle);
//document.body.innerHTML = result;
console.log(result);