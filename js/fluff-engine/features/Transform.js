import { Feature } from "../entities/Feature.js";
import { Vec2 } from "../utils/Vec2.js";

export class Transform extends Feature {
    static type = 'transform';
    
    position = new Vec2();
    rotation = 0.0;
}