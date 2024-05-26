//Day 06

// Question 16 : More Guests: You've found a bigger dinner table, so there's room for more guests.

let guestArr : string[] = ["Ilma", "Mehak", "Asma"];

console.log(`Congratulation we have a bigger dinner table.`);

guestArr.unshift("Ali")
guestArr.splice(3,0,"Hamna");
guestArr.push("Fatima");


guestArr.forEach(guest => {
    console.log(`Dear ${guest} would you like to join us for dinner.`)
});

// Question 17 : Shrinking Guest List: Unfortunately, your new table won’t arrive in time, and you can only invite two guests.

console.log(`Sorry but the bigger dinner table is not arriving so we can invite only 2 guets.`);

guestArr.shift();
guestArr.splice(2,2);
guestArr.pop();

guestArr.forEach(guest => {
    console.log(`Dear ${guest} would you like to join us for dinner.`)
});

// Question 18

let worldPlaces : string[] = ["Italy", "South Korea", "Russia", "Japan"];

console.log("Original Places:", worldPlaces);

console.log("Alphabectical Order:", [...worldPlaces].sort());

console.log("Original Places:", worldPlaces);

console.log("Reverse Alphabectical Order:", [...worldPlaces].sort().reverse());

console.log("Original Places:", worldPlaces);

worldPlaces.reverse();
console.log("Reverse Order:", worldPlaces);

worldPlaces.reverse()
console.log("Original Places:", worldPlaces);

worldPlaces.sort();
console.log("Alphabectical Order:", worldPlaces);

worldPlaces.reverse();
console.log("Reverse Alphabectical Order:", worldPlaces);


