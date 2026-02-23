# Questions & Answers

## 1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

getElementById() selects a single element using its unique ID. Since an ID should be unique in a webpage, it always returns only one element.

getElementsByClassName() selects elements using a class name and returns a live HTMLCollection. It can return multiple elements.

querySelector() selects the first matching element using a CSS selector (such as class, id, or tag).

querySelectorAll() selects all matching elements using a CSS selector and returns a NodeList, which can be looped using forEach().

---

## 2. How do you create and insert a new element into the DOM?

To create a new element, we use document.createElement(). After creating it, we can add text or attributes and then insert it into the DOM using methods like appendChild().

Example:
let div = document.createElement("div");
div.textContent = "New Element";
document.body.appendChild(div);

---

## 3. What is Event Bubbling? And how does it work?

Event Bubbling is a process where an event starts from the target element and then propagates upward to its parent elements in the DOM hierarchy.

For example, if a button is inside a div and both have click events, clicking the button will first trigger the button's event and then the div's event.

---

## 4. What is Event Delegation in JavaScript? Why is it useful?

Event Delegation is a technique where we attach an event listener to a parent element instead of adding separate listeners to each child element.

It is useful because it works for dynamically added elements and improves performance by reducing the number of event listeners.

---

## 5. What is the difference between preventDefault() and stopPropagation() methods?

preventDefault() stops the default behavior of an element, such as preventing a link from navigating to another page.

stopPropagation() stops the event from propagating (bubbling) to parent elements in the DOM.
