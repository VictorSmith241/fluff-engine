import { IdManager } from "../utils/IdManager.js";
import { SparseSetManager } from "../utils/SparseSetManager.js";
import { Feature } from "./Feature.js";

export class Item {
    static instances = new SparseSetManager();
    static idManager = new IdManager();

    constructor(name = 'Item') {
        this.name = name;
        this.id = Item.idManager.getAvailableId();
        Item.instances.set(this.id, this);
    }

    addFeature(feature, storageConstructor=null) {
        Feature.addForItem(this.id, feature, storageConstructor);
    }

    destroy() {
        Item.instances.delete(this.id);
        Item.idManager.releaseId(this.id);
    }
}