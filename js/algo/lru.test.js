import {expect, test} from "vitest";

import {LRU} from "./lru";

test("Get correct LRU", ()=> {
    const lru = new LRU(3);
    lru.putItem('a', 1);
    expect(lru.getItem('a')).toBe(1);

    lru.putItem('a', 2);
    expect(lru.getItem('a')).toBe(2);

    lru.putItem('b', 3);
    expect(lru.getItem('a')).toBe(2);

    lru.putItem('c', 4);
    expect(lru.getItem('a')).toBe(2);

    lru.putItem('d', 5);
    expect(lru.getItem('a')).toBe(2);
    expect(lru.getItem('b')).toBe(undefined);
    expect(lru.getItem('c')).toBe(4);
    expect(lru.getItem('d')).toBe(5);
});