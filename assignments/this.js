/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Principle 1: Window/Global Object Binding: 'this' will refer to its surroundings, right? So if you console.log(this); in the global scope, or window, it will show you EVERYTHING. 
* 2. Principle 2: Implicit Binding: console.log(this.greeting); is pointing at what comes after 'this.', which is greeting in this case. 
* 3. Principle 3: New Binding: We're giving 'this' more power here. We can include 'this' in a constructor function and actually allow 'this' to create objects.
4. Principle 4: Explicit Binding: When you use call() or apply() methods, we are explictedly defining 'this'
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
// console.log(this);

// // Principle 2

// // code example for Implicit Binding
// console.log(this.action);
// Principle 3

// code example for New Binding
//create a constructor function
function freeFolk(name) {
    this.phrase = 'You know nothing, ';
    this.name = name;
    this.speak = function() {
        console.log(this.phrase + this.name);
    };
}

const ygritte = new freeFolk('Jon Snow');
const jonSnow = new freeFolk('Ygritte');

console.log(ygritte.speak());
console.log(jonSnow.speak());

// Principle 4


// code example for Explicit Binding
ygritte.speak.call(jonSnow);
jonSnow.speak.apply(ygritte);