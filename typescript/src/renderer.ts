import { Shape } from "./shapes/shape";;

class newRenderer {
    private shape: Shape;
    
    constructor(shape: Shape) {
        this.shape = shape;
    }

    computeArea(): number {
        return this.shape.computeArea();
    }

    draw(): void {
        this.shape.draw();
    }

    // return {
    //     draw() {
    //         const area: number = rectangle.computeArea()
    //         console.log("Shape drawn\n" + "Its area is " + area)
    //     }
    // }
}

export { newRenderer }