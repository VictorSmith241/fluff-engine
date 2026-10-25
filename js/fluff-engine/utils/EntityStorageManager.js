export class EntityStorageManager {
    constructor() {
        this.array = [];
        this.map = new Map();
    }

    set(id, entity) {
        this.array.push(entity);
        this.map.set(id, entity);
    }

    get(id) {
        return this.map.get(id);
    }

    delete(id) {
        const entity = this.map.get(id);
        if (!entity) return;

        this.map.delete(id);

        const index = this.array.indexOf(entity);
        const lastEntity = this.array[this.array.length - 1];

        this.array[index] = lastEntity;
        this.array.pop();
    }
}