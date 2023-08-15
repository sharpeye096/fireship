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
const lru = new LRU(3);
lru.putItem('a', 1);
lru.putItem('b', 2);
lru.putItem('c', 3);
lru.putItem('d', 4);
console.log(lru.getItem('a'));
console.log(lru.getItem('b'));
console.log(lru.getItem('c'));
console.log(lru.getItem('d'));
class A1 {
}
class A2 {
}
class A3 {
}
class A4 {
}

// ?. operator is naturelly supported in JS. So why compiler compile it into such long statement?
function test(a1) {
    var _a, _b, _c;
    return (_c = (_b = (_a = a1 === null || a1 === void 0 ? void 0 : a1.a2) === null || _a === void 0 ? void 0 : _a.a3) === null || _b === void 0 ? void 0 : _b.a4) === null || _c === void 0 ? void 0 : _c.value;
}
