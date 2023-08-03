// Logical Operators
// && (and)
// || (or)
// ! (not / the opposite)

var hungry = true;
var timeOfDay = 'Dinner time';

if (hungry === true && (timeOfDay === 'Lunch time')) {
    console.log('Eat lunch!');
} else if (hungry === true && (timeOfDay !== 'Lunch time' || 'Dinner time')) {
    console.log('Eat a snack!');
} else {
    console.log('It is NOT time to eat.');
}

// OR try...

// if (hungry === true && timeOfDay === 'Lunch time') {
//     console.log('Eat lunch!');
// } else if (hungry === true && timeOfDay === 'Dinner time') {
//     console.log('Eat dinner!');
// } else if (hungry === true && timeOfDay !== 'Lunch time') {
//     console.log('Eat a snack!');
// } else {
//     console.log('It is NOT time to eat.')
// }