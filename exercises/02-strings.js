// TIP: check out these references for Strings and Arrays:
// - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
// - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function "reverse" that computes the reversal of a string.
//
// Example:
// reverse("skoob") --> "books"
function reverse(theString) {
    var splitTheString = theString.split("")
    var reverseArray = splitTheString.reverse()
    var joinArray = reverseArray.join("")
    return joinArray
}
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function "findLongestWord" that takes a string of words and returns
// the longest word in that string. If there are multiple words with the same
// maximum length return the first longest word.
//
// Example:
// findLongestWord('a book full of dogs') --> 'book'
function findLongestWord(str) {
    var longestWord = str.split(' ').sort(function(a, b) { return b.length - a.length; })
    return longestWord[0]
  }
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function called "nicer"
// It should clean up the language in its input sentence.
// Forbidden words include heck, darn, dang, and crappy.
//
// Example:
// nicer('mom get the heck in here and bring me a darn sandwich.')
// > 'mom get the in here and bring me a sandwich.'
function nicer(inputScentence) {
    var outputScentence = inputScentence.replace(/heck /gi, "")
    var outputScentence = outputScentence.replace(/darn /gi, "")
    var outputScentence = outputScentence.replace(/dang /gi, "")
    var outputScentence = outputScentence.replace(/crappy /gi, "")
    return outputScentence
}
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function called "capitalizeAll"
// It should take as input a sentence and capitalize the first letter
// of every word in the sentence.
//
// Examples:
// capitalizeAll('hello world') --> 'Hello World'
// capitalizeAll('every day is like sunday') --> 'Every Day Is Like Sunday'
function capitalizeAll(theScentence) {
    var splitTheString = theScentence.split(" ")
    function Capitalize(word) {
        return word.charAt(0).toUpperCase() + word.slice(1)
    }
    var capitalizeEachWord = splitTheString.map(Capitalize)
    var newScentence = capitalizeEachWord.join(" ")
    return newScentence
}
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function called "split" that does the same thing as String.split
// It should take two inputs: (1) a string and (2) a delimiter string
// Do not use the native .split() method for this. Your task is to reverse-engineer
// .split() and write your own.
//
// Examples:
// split('a-b-c', '-') --> ['a', 'b', 'c']
// split('APPLExxBANANAxxCHERRY', 'xx') --> ['APPLE', 'BANANA', 'CHERRY']
// split('xyz', 'r') --> ['xyz']
function split(theString, aDelimiter) {
    // validate the format of the given string
    var replace = aDelimiter
    var regex = new RegExp(replace, "g")
    var newString = theString.replace(regex, ",")
    var garbageArray = newString.match(/,/g)
    // if delimiter exists in the string, then setup an outter while loop
    if (garbageArray !== null) {
        var numberOfCommas = garbageArray.length
        var arrayToReturn = []
        var x = 0
        // copy each word to a stagingArray
        while (x <= numberOfCommas) {
            var stagingArray = []
            var i = 0
            var indexOfFirstComma = newString.indexOf(",")
            while (i <= indexOfFirstComma && indexOfFirstComma !== -1) {
                var char = newString.charAt([i])
                stagingArray.push(char)
                i++
            }
            if (indexOfFirstComma === -1) {
                i= 0
                while (i <= newString.length) {
                    var char = newString.charAt([i])
                    stagingArray.push(char)
                    i++
                }
            }
            // convert the stagingArray into a substring
            var substring = stagingArray.join("")
            // remove the trailing comma
            var substringMinusComma = substring.replace(",", "")
            // add the substring to an arrayToReturn
            arrayToReturn.push(substringMinusComma)
            var replace = substring
            var regex = new RegExp(replace, "g")
            newString = newString.replace(regex, "")
            x++
        }
        return arrayToReturn
    }
    // if delimiter doesn't exist in theString, convert theString to an arrayToReturn
    else {
        var arrayToReturn = []
        var stagingArray = []
        i = 0
        while (i < theString.length) {
            var char = theString.charAt([i])
            stagingArray.push(char)
            i++
        }
        var substring = stagingArray.join("")
        arrayToReturn.push(substring)
        return arrayToReturn
    }
}