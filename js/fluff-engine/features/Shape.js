import { Feature } from "../entities/Feature.js";

export class Shape extends Feature {
    static type = 'shape';

    vertices = [];
    fillColor = 'black';
    
    vertexAdd(x, y) {
        this.vertices.push(x, y);
    }

    vertexRemove(idx) {
        this.vertices.splice(idx * 2, 2);
    }
    
    vertexInsert(idx, x, y) {
        this.vertices.splice(idx * 2, 0, x, y);
    }
}