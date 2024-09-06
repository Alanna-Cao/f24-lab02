import { Shape } from './shape';

// interface Rectangle {
//     computeArea: () => number
// }

// function newRectangle(width: number, height: number): Rectangle {
//     return {
//         computeArea: function (): number {
//             return width * height
//         }
//     }
// }

// export { Rectangle, newRectangle }

export class Rectangle implements Shape {
    private width: number;
    private height: number;

    constructor(width: number, height: number) {
        this.width = width;
        this.height = height;
    }

    computeArea(): number {
        return this.width * this.height;
    }

    draw(): void {
        console.log("Shape printed\n" + "Its area is " + this.computeArea());
    }
}