export class LRU {
    constructor(capacity) {
        this.capacity = capacity;
        this.cache = new Map();
    }
    getItem(key) {
        const item = this.cache.get(key);
        if (item) {
            this.cache.delete(key);
            this.cache.set(key, item);
        }
        return item;
    }
    putItem(key, value) {
        if (this.cache.has(key)) {
            this.cache.delete(key);
            this.cache.set(key, value);
            return;
        }
        if (this.cache.size >= this.capacity) {
            const oldestKey = getOldestItem(this.cache);
            this.cache.delete(oldestKey);
        }
        this.cache.set(key, value);
    }
}
function getOldestItem(map) {
    return map.keys().next().value;
}
