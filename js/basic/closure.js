const state = "555";

function callMeWithClosure() {
    console.log(state) ;
}

callMeWithClosure();

function outer() {
    let x = 1;
    function inner() {
        x = x + 1;
    }
    return inner;
}

// so x is mutate when increaseX is called 
const increaseX = outer();
increaseX();
increaseX();

const array = Array(100).fill(0).map((_, i) => i);

for(const [i, val] of array.entries()) {
    console.log(i, val);
}