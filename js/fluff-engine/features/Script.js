import { Feature } from "../entities/Feature.js";
import { Item } from "../entities/Item.js";

export class Script extends Feature {
    static type = 'script';

    itemId = null;

    get item() {
        return Item.instances.get(this.itemId);
    }

    onReady() {

    }
    
    loop(deltaTime) {

    }
}