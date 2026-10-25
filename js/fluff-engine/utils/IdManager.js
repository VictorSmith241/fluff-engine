export class IdManager {
    freeIds = new Uint32Array();
    freeCount = 0;
    edgeID = 0;
    
    constructor(initialCapacity = 1000) {
        this.capacity = initialCapacity;
    }

    getAvailableId() {
        if (this.freeCount > 0) {
            this.freeCount--;
            return this.freeIds[this.freeCount];
        }

        return this.edgeID++;
    }

    releaseId(id) {
        this.freeCount++;
        this.freeIds[this.freeCount] = id;
    }
}