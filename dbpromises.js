const level = require('level');
const myDB = './dbcallback';
const db = level(myDB);

// PROBLEM STATEMENT
// I think I need to code up a method that generates a promise (executing an asynchrounous execution of code)
// How can I return the result of that execution from my method (function)? Is that even possible?  Am I asking the right question?

// Define a Javascript class
class HumbleObject {
    constructor() {
        this.startkey = 0;
        this.addElement(0, "MY INITIAL ELEMENT!");
    }

    // addElement is a HubleObject method that saves a chunk of data to a local LevelDB
    addElement(k, v) {
        db.put(k, v)
            .then(function () { console.log("Your element has been saved") })
            .catch(function (err) { console.log("An error has occurred. See:", err) })
    }

    // getElement is a HubleObject method that fetches a chunk of data given a passed key 'k'
    getElement(k) {
        db.get(k)
            .then(function (v) { console.log("Got value: |", v, "| how can I return the value?") })
            .catch(function (err) { console.log("An error has occurred. See:", err) })

            // The expectation is that getElement will return a value; how can I do this leveraging:
            //   1. a leveldb "get" promise OR
            //   2. an asynchronous callback function OR
            //   3. some other construct

            return /* something? */
    }

}

// Create a class instance
var myObj = new HumbleObject;

// Call the 'getElement' method to "return" the element's value
myObj.getElement(0);

