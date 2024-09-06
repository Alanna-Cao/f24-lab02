// function circle(radius: number): Shape {
//     return {
//         radius,
//         computeArea: function (): number {
//             return Math.PI * radius * radius
//         }
//     }
// }

// export { circle }

import { Shape } from './shape';

export class Circle implements Shape {
    private radius: number;

    constructor(radius: number) {
        this.radius = radius;
    }

    computeArea(): number {
        return Math.PI * this.radius * this.radius;
    }

    draw(): void {
        console.log("Shape printed\n" + "Its area is " + this.computeArea());
    }
}