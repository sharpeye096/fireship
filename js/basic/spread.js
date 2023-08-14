const obj1 = {first: "a", second: "b", third: "c"};

const obj2 = {third: "d", forth: "e"};

const full = Object.assign({}, obj1, obj2);

console.log(full);

// the later (obj2) will overwrite the former (obj1)
const full2 = {...obj1, ...obj2};
// { first: 'a', second: 'b', third: 'd', forth: 'e' }
console.log(full2);

const full3 = {...obj2, ...obj1};

// { third: 'c', forth: 'e', first: 'a', second: 'b' } 
console.log(full3);