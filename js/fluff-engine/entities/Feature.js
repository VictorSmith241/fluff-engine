import { SparseSetManager } from "../utils/SparseSetManager.js";
import { EntityStorageManager } from "../utils/EntityStorageManager.js";
import { SparseArrayManager } from "../utils/SparseArrayManager.js";

export class Feature {
    get type() {
        if (!this.constructor.type) {
            throw new Error(`The "static type" is not specified in the class ${this.constructor.name}`);
        }
        return this.constructor.type;
    }

    static storage = {
        transform: new SparseSetManager(),
        shape: new SparseSetManager(),
        script: new SparseSetManager()
    };

    static get(type, id) {
        return Feature.storage[type].get(id);
    }

    static addForItem(id, instance, storageConstructor=null) {
        if (!Feature.storage[instance.type]) {
            if (!storageConstructor) throw new Error(`The feature storage does not have an array to store ${instance.type} feature. Please, specify this.`);
            storage[instance.type] = new storageConstructor();
        }
        
        Feature.storage[instance.type].set(id, instance);

        if (instance.itemId === null) instance.itemId = id;

        if (typeof instance.onReady === 'function') {
            instance.onReady();
        }
    }
}