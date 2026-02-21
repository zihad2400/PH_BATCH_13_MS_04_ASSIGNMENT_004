1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
Awanser::  Method Return Type Selects Notes
***getElementById('id') Single element By ID Returns only one element.
***getElementsByClassName('class') HTMLCollection (array-like) By class Returns live collection, multiple elements possible.
***querySelector('selector') Single element CSS selector Returns the first matching element.
***querySelectorAll('selector') NodeList CSS selector Returns all matching elements, can use forEach.

Example:

let el1 = document.getElementById('myId');
let el2 = document.getElementsByClassName('myClass');
let el3 = document.querySelector('.myClass'); // first element
let el4 = document.querySelectorAll('.myClass'); // all elements


2. How to create and insert a new element into the DOM

Create a new element:

let newDiv = document.createElement('div');

Add text or attributes:

newDiv.textContent = "Hello World";
newDiv.className = "myClass";

Insert it into the page:

document.body.appendChild(newDiv); // adds at the end of body

let parent = document.getElementById('parentDiv');
parent.insertBefore(newDiv, parent.firstChild); // insert at the beginning


3. What is Event Bubbling and how it works

Event Bubbling is when an event propagates from child to parent elements.

Example: If you click a button inside a parent div, the event goes:

button → div → body → html

document.getElementById('child').addEventListener('click', () => {
    console.log("Child clicked");
});

document.getElementById('parent').addEventListener('click', () => {
    console.log("Parent clicked");
});


4. What is Event Delegation in JavaScript and why is it useful

Event Delegation is attaching an event listener to a parent element to handle events on its child elements.

Benefits:

Works for dynamically added child elements

Fewer listeners → better performance

document.getElementById('parent').addEventListener('click', function(e) {
    if(e.target && e.target.className === 'child-btn') {
        console.log('Child button clicked:', e.target.textContent);
    }
});


5. Difference between preventDefault() and stopPropagation()
Method Purpose Usage
preventDefault() Stops default browser behavior Example: clicking <a> link without page reload
stopPropagation() Stops event bubbling/capturing Prevent parent element listeners from firing

Example:

document.getElementById('link').addEventListener('click', function(e){
    e.preventDefault(); // link click won't reload the page
});

document.getElementById('child').addEventListener('click', function(e){
    e.stopPropagation(); // parent listener won't run
});


 In short:

getElementById → select by ID, single element

getElementsByClassName → select by class, multiple elements

querySelector / querySelectorAll → flexible CSS selector

createElement + appendChild → create & insert DOM element

Event Bubbling → child → parent

Event Delegation → parent listener handles children

preventDefault() → stops default browser action

stopPropagation() → stops event bubbling
