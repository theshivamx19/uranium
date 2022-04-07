let trim = function(){
    console.log("After using trim string is: " + "   functionup   " .trim())
}

let lower = function(){
    console.log('After lower case: ', 'ShiVAm'. toLowerCase())
}

let upper = function(){
    console.log('After upper case: ', 'mauryA'. toUpperCase())
}

module.exports.trimstr = trim
module.exports.lowerstr = lower
module.exports.upperstr = upper