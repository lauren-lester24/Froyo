
function convertStringToArrays(commaSeperatedFlavors) {
 //split by commas
 return commaSeperatedFlavors.split(",");
// string to arrays
}
// function countFlavors(flavors) {
// // making it an array
// const froyoFlavors = flavors.split(",");

const userInput = prompt(
  "Please enter a list of comma-separated Froyo flavors.",
  " vanilla, vanilla, vanilla, strawberry, coffee, coffee"
);

function describeFlavors(flavors) {
  console.log("flavor", flavors);

}
const flavors = convertStringToArrays(userInput);
describeFlavors(flavors);

const frequencyCounter = {};

for (let i = 0; i < flavors.length; i++) {
  // counting flavors now
  const flavor = flavors[i];
  console.log("flavor", flavor);
  if(flavor in frequencyCounter) {
            frequencyCounter[flavor] += 1
  }
  else {
   frequencyCounter[flavor] = 1;
  }


}

console.log("freq", frequencyCounter); 



// function convertStringToFlavors(commaSeperatedFlavors) {
//   //split string of flavors into an array of strings

//   const strings = commaSeperatedFlavors.split(",");
// // convert array of strings
//   const flavors = [];
// //   for (const s of strings) {
// //     const flavor = parseInt(s);
// //     flavors.push(flavor);
// //   }
//   return flavors
// // }
// }

//Function describeFlavors(flavors) {

//console.log(flavors)

// let flavorsArray = userInputString.split(',');
//
