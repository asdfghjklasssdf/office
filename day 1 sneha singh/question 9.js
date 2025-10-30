// switch case in the javascript
let shape = "square";

switch (shape) {
  case "square":
    let side = prompt("What is side length?");
    let area = side * side;
    let perimeter = 4 * side;
    console.log("square " + area + perimeter );
  case "rectangle":
    let length = prompt("What is length of reactangle ?");
    let breadth = prompt("What is breadth of reactangle ?");
    let arearectangle =  length * breadth;
    let perimeterrectangle =2* (length * breadth);
    console.log("rectangle " + arearectangle + perimeterrectangle );
  case "triangle":
    let height = prompt("What is height of triangle ?");
    let base = prompt("What is base of triangle ?");
    let side1 = prompt("What is side1 of triangle ?");
    let side2 = prompt("What is side2 of triangle ?");
    let side3 = prompt("What is side3 of triangle ?");
    let areatriangle =  0.5 * base * height ;
    let perimetertriangle = side1 + side2 + side3;
    console.log("rectangle " + areatriangle + perimetertriangle );
  case "circle":
    let radius = prompt("What is radius length?");
    let areacircle = Math.PI * Math.pow(radius, 2);
    let perimetercircle = 2 * Math.PI * radius;
    console.log("square " + areacircle + perimetercircle );
    break;
  default:
    console.log("Unknown fruit.");
}
