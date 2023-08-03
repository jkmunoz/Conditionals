// Logical Operators
// && (and)
// || (or)
// ! (not / the opposite)

var hungry = true;
const lunchTime = '12pm';
const dinnerTime = '6pm';
var timeOfDay = '3pm';

if (hungry === true && timeOfDay === '12pm') {
    console.log('Eat lunch!');
} else if (hungry === true && timeOfDay === '6pm') {
    console.log('Eat dinner!');
} else if (hungry === true && timeOfDay !== '12pm' ||
    hungry === true && timeOfDay !== '6pm') {
    console.log('Eat a snack!');
// the code below will never be logged becase the system will say it's
//   snack time as long as its not lunch or dinner time.
// I'd need to learn how to use a built-in TIME tool and give the system
//   a bracket of time that did not permit eating. 
} else {
    console.log('It is NOT time to eat.')
}