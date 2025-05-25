// Declare an empty array;
let Arr = [];
// Declare an array with more than 5 number of elements
let Arr1 = ["Football" , "Tennis", "Basketball", "Ping Pong" , "Volley", "Dodgeball"];
// Find the length of your array
console.log(Arr1.length);
// Get the first item, the middle item and the last item of the array
console.log("First Item", Arr1[0] , "middle Item ", Arr[Arr1.length/2] , "Last Item", Arr[Arr1.length - 1]);
// Declare an array called mixedDataTypes, put different data types in the array and find the length of the array. The array size should be greater than 5
let mixedDataTypes = ["Naruto" , 10 , "Rezero" , "top" , 2 , 6 , 'S'];
// Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon
let itCompanies = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"];
// Print the array using console.log()
console.log(itCompanies)
// Print the number of companies in the array
console.log(itCompanies.length)
// Print out each company
itCompanies.forEach(e => console.log(e))
// Change each company name to uppercase one by one and print them out
itCompanies.forEach(e => console.log(e.toUpperCase()))
// Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies.
console.log(itCompanies.join() + " are big It companies")
// Check if a certain company exists in the itCompanies array. If it exist return the company else return a company is not found
    if(itCompanies.includes("Youtube")){
        console.log("Youtube");
    }
    else{
        console.log("company is not found");
    }
// Sort the array using sort() method
console.log(itCompanies.sort())
// Reverse the array using reverse() method
console.log(itCompanies.reverse())
// Slice out the first 3 companies from the array
console.log(itCompanies.slice(0, 3))
// Slice out the last 3 companies from the array
console.log(itCompanies.slice(4, 7))
// Slice out the middle IT company or companies from the array
console.log(itCompanies.slice(3, 4))
// Remove the first IT company from the array
console.log(itCompanies.shift(0))
// Remove the middle IT company or companies from the array
console.log(itCompanies.shift(3))
// Remove the last IT company from the array
console.log(itCompanies.pop(itCompanies.length - 1))
// Remove all IT companies
console.log(itCompanies.splice())