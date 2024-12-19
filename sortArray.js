// Declare the two arrays with the given values
let numbers = [24, 65, 21, 5, 9, 32, 42, 80, 57];
let names = ["Zenvo", "Erica", "Jordie", "Alicia", "Redon"];

// Merge both arrays into a single array
let mergedArray = numbers.concat(names);

// Log the merged array to the console
console.log("Merged array:", mergedArray);

// Sort numbers in reverse numerical order
let sortedNumbers = numbers.sort((a, b) => b - a);

// Log the sorted numbers array
console.log("Sorted numbers in reverse order:", sortedNumbers);

// Sort names alphabetically
let sortedNames = names.sort();

// Log the sorted names array
console.log("Sorted names alphabetically:", sortedNames);
