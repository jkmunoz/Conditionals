// Logical Operators
// && (and)
// || (or)
// ! (not / the opposite)

var hungry = true;
var timeOfDay = 'Lunch time' || 'Dinner time';

if (hungry === true && timeOfDay === 'Lunch time' || 'Dinner time') {
    console.log('Time to eat!');
} else if (hungry === true && timeOfDay !== 'Lunch time' || 'Dinner time') {
    console.log('Eat a snack!');
} else {
    console.log('It is NOT time to eat.')
}

