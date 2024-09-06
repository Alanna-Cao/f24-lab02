package edu.cmu.cs.cs214.lab02;

import edu.cmu.cs.cs214.lab02.shapes.*;
import edu.cmu.cs.cs214.lab02.shapes.Shape;

public class Main {
    public static void main(String[] args) {
        Shape rectangle = new Rectangle(2, 3);
        Renderer rectRenderer = new Renderer(rectangle);
        rectRenderer.draw();

        Shape circle = new Circle(3);
        Renderer circleRenderer = new Renderer(circle);
        circleRenderer.draw();
    }
}
