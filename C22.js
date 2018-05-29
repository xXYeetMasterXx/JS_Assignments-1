function checkCar() {
  favCar = prompt("input a car");

  switch(favCar) {
  	case "BMW":
  		favCar = "German Car";
  		break;
  	
  	case "Ford":
  		favCar = "American Car";
  		break;
  		
  	case "Peugot":
  		favCar = "French Car";
  		break;
  	
  	default:
  		favCar = "Unknown car name";
  		break;
  }
  console.log(favCar);
}

checkCar();
