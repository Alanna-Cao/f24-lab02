import { Shape } from './shape';

// function square(sideLen: number): Shape {
//     return {
//         sideLen,
//         computeArea: function (): number {
//             return sideLen * sideLen
//         }
//     }
// }

// export { square }

export class Square implements Shape {
    private sideLen: number;

    constructor(sideLen: number) {
        this.sideLen = sideLen;
    }

    computeArea(): number {
        return this.sideLen * this.sideLen;
    }

    draw(): void {
        console.log("Shape printed\n" + "Its area is " + this.computeArea());
    }
}