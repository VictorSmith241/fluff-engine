import { Item } from "../entities/Item.js";
import { Shape } from "../features/Shape.js";
import { Transform } from "../features/Transform.js";
import { PlayerScript } from "./PlayerScript.js";

export function initWorld() {
    const rect1 = new Item('Rect 1');
    const rectTransform = new Transform();
    rectTransform.position.x = 200;
    rectTransform.position.y = 190;
    const rectShape = new Shape();
    rectShape.vertexAdd(-50, -50);
    rectShape.vertexAdd(50, -50);
    rectShape.vertexAdd(50, 50);
    rectShape.vertexAdd(-50, 50);
    rect1.addFeature(rectTransform);
    rect1.addFeature(rectShape);

    const rect2 = new Item('Rect 2');
    const rectTransform2 = new Transform();
    rectTransform2.position.x = 160;
    rectTransform2.position.y = 150;
    const rectShape2 = new Shape();
    rectShape2.vertexAdd(-25, -25);
    rectShape2.vertexAdd(25, -25);
    rectShape2.vertexAdd(25, 25);
    rectShape2.vertexAdd(-25, 25);
    rectShape2.fillColor = 'green';
    rect2.addFeature(rectTransform2);
    rect2.addFeature(rectShape2);
    rect2.addFeature(new PlayerScript());
}