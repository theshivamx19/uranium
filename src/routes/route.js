const express = require('express');
const abcwelcome = require('../logger/logger')
const abctrim = require('../util/helper')
const lodash = require('lodash')

const router = express.Router();

router.get('/test-me', function (req, res) {
   abcwelcome.abc()
   abctrim.trimstr()
   abctrim.lowerstr()
   abctrim.upperstr()
    res.send('My first ever api!')
});

router.get('/test-me1', function (req, res) {
    let monthname = ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec']
    let subarray = lodash.chunk(monthname, 3)
    console.log("After dividing the months into 4 parts", subarray)


let oddarray = [1,3,5,7,9,11,13,15,17,19]
let tailoddnum = lodash.tail(oddarray)
console.log("tail 9 odd numbers are:", tailoddnum)

let arr1 = [1, 5, 4, 2, 7]
let arr2 = [3, 8, 2, 6]
let arr3 = [6, 9, 1, 2]
let arr4 = [3, 5]
let arr5 = [2, 8, 7]
console.log('Union of these array are:', lodash.union(arr1, arr2, arr3, arr4, arr5))

let fromobj =[["horror","The Shining"],["drama","Titanic"],["thriller","Shutter Island"],["fantasy","Pans Labyrinth"]]
console.log('the object and keys are:', lodash.fromPairs(fromobj))
console.log("I have Done!!")

});

    





module.exports = router;
// adding this comment for no reason