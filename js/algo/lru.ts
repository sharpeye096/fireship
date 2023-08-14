
export class LRU {
    private cache: Map<string, any>;

    constructor(public readonly capacity: number) {
        this.cache = new Map<string, any>();
    }

    getItem(key: string) {
        const item = this.cache.get(key);

        if(item) {
            this.cache.delete(key);
            this.cache.set(key, item);
        }
        return item;
    }

    putItem(key: string, value: any) {
        if(this.cache.has(key)) {
            this.cache.delete(key);
            this.cache.set(key, value);
            return;
        }
        if(this.cache.size >= this.capacity) {
            const oldestKey = getOldestItem(this.cache);
            this.cache.delete(oldestKey);
        }

        this.cache.set(key, value);
    }
}

function getOldestItem(map: Map<string, any>): string {
    return map.keys().next().value;
}

const lru = new LRU(3);
lru.putItem('a', 1);
lru.putItem('b', 2);
lru.putItem('c', 3);
lru.putItem('d', 4);

console.log(lru.getItem('a'));
console.log(lru.getItem('b'));
console.log(lru.getItem('c'));
console.log(lru.getItem('d'));