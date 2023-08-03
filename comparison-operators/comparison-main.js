// comparison operators...
// <
// >
// <=
// >=
// === (strict equality. MUST BE THE SAME TYPE. 95 === 95)
// == (flexible equality, like comparing 95 == '95' where TYPE will not matter.)
// !==

var myTestScore = 95;
var yourTestScore = 75;

if (myTestScore > yourTestScore) {
    console.log('You owe me a beer.');
} else {
    console.log('I owe you a beer.');
}