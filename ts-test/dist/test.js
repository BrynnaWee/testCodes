"use strict";
// interface CraftBeer {
//     beerName: string;
//     nameBeer(beer: string): void;
// }
function logText(text) {
    console.log(text.length);
    return text;
}
var test = logText({ length: 10, value: 'hi' });
console.log(test);
