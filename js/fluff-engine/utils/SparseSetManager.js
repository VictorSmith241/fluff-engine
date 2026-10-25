export class SparseSetManager {
    denseValues = [];
    #ownersToValues = new Uint32Array(10000);
    //#valuesToOwners = [];

    set(id, instance) {
        const featureIdx = this.denseValues.length;

        this.denseValues.push(instance);
        this.#ownersToValues[id] = featureIdx;
        //this.#valuesToOwners[featureIdx] = id;
    }

    get(id) {
        return this.denseValues[this.#ownersToValues[id]];
    }

    delete(id) {
        const featureIdx = this.#ownersToValues[id];
        //delete this.#valuesToOwners[featureIdx];
        delete this.#ownersToValues[id];
    }
}