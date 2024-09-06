import { newRenderer } from "./renderer.js"
import { Rectangle } from "./shapes/rectangle.js";
import { Shape } from "./shapes/shape.js";
import { Circle } from "./shapes/circle.js";

const rectangle: Shape = new Rectangle(2, 3)
const rendererRect = new newRenderer(rectangle)
rendererRect.draw();
// console.log("Shape printed\n" + "Its area is " + renderer.computeArea());


const circle: Shape = new Circle(3)
const renderCircle = new newRenderer(circle)
renderCircle.draw();