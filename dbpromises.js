const level = require('level');
const myDB = './dbcallback';
const db = level(myDB);

// PROBLEM STATEMENT
// I need to develop a method with a "signature" that:
//    1. accepts a 'key' value identifying a key/value pair in a local leveldb instance
//    2. returns the value associated with that key
//
// Issue: 
//    * accessing the leveldb is an asynchronous operation using a Javascript promise
//    * if I need to conform to the method signature above, how can I 'return' the key/value pair result as a return value?
//    * Am I even approaching this issue in the right way

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

    // getElement is a HumbleObject method that fetches a chunk of data associated with a passed key 'k'
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

