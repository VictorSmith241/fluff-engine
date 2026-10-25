export class SparseArrayManager {
    array = [];

    set(id, value) {
        this.array[id] = value;
    }

    get(id) {
        return this.array[id];
    }

    delete(id) {
        if (id === this.array.length - 1) this.array.pop();
        else delete this.array[id];
    }
}