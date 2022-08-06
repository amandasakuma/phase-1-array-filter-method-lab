// findMatching- This function takes an array of drivers' names and a string as arguments, and returns the matching list of drivers. 
// The function should be case insensitive.
const driversArray = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']

//findMatching(drivers, name)

function findMatching(drivers, theNameTheyWant) {
    return drivers.filter((driver, i) => {
        return driver.toLowerCase() === theNameTheyWant.toLowerCase()
    })
}
findMatching(driversArray, 'Bobby')

// function findMatching(drivers) {
//     return drivers.filter((driver, orderInArray) => {
//         //looks for first occurance of a driver's name showing up in teh array
//         let firstOccurance = drivers.indexOf(driver);
//         //current occurance is just the index(meaning where that instance of the name is in the array)
//         let currentOccurance = orderInArray;
//         if (firstOccurance != currentOccurance) {
//             return true
//         }
//     })
// }
// console.log(findMatching(driversArray))

// function findMatching(driver, i) {
//     return driver.filter(
//         (matchedDrivers) => matchedDrivers.toLowerCase() === i.toLowerCase()
//     )
// }

// console.log(findMatching(drivers))
// const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']


// // This function takes an array of drivers' names and a string as arguments for querying the array 
// //returns all drivers whose names begin with the provided letters.

let drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']
function fuzzyMatch(driversArray, twoLetterString) {
    let newArray = driversArray.filter((driver, index) => {
        return driver.slice(0, 2) === twoLetterString
    })
    return newArray
}
console.log(fuzzyMatch(drivers, 'Sa'))


// // describe('matchName()', function () {
// //     it('accesses the data structure to check if name matches', function () {
// //       const drivers = [
// //         {
// //           name: 'Bobby',
// //           hometown: 'Pittsburgh' },
// //         {
// //           name: 'Sammy',
// //           hometown: 'New York' } ,
// //         {
// //           name: 'Sally',
// //           hometown: 'Cleveland' },
// //         {
// //           name: 'Annette',
// //           hometown: 'Los Angeles' },
// //         {
// //           name: 'Bobby',
// //           hometown: 'Tampa Bay' }
// //       ];

// //       expect(matchName(drivers, 'Bobby')).to.eql([
// //         {
// //           name: 'Bobby',
// //           hometown: 'Pittsburgh'
// //         },
// //         {
// //           name: 'Bobby',
// //           hometown: 'Tampa Bay'
//         }
//         //make a function w/ two arguments = array of driver objects (driverObjectArray), string (matchingNameString)
//         //

function matchName(driverObjectArray, matchingNameString) {
    let matchingDriverArray = driverObjectArray.filter((driver, index) => {
        return driver.name === matchingNameString
    })
    return matchingDriverArray
}

console.log(matchName(drivers))