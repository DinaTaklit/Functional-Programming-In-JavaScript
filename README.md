# Functional Programming in Java Script

This is practical examples to learn functional programming.

## Run codes

- `npm init`
- `npm install`
- to run a js code we use `node namefile.js`

## 2.Closures

- In javascript functions are not just functions, they are also closures. What that means is that the function body has access to variables that are defined outside the function.
- Closures have a bit of use cases. Here is an example why closures are.
- Since all functions in javascript or closures including the callback to success it will have access to the request Id that we declared even though this callblack is executed way later (see example below).

```javasript
function sendRequest(){
    var requestID = '123'
    $.ajax({
        url: '/myUrl',
        success: function(response){
            alert(`Request ${requestID} returned`);
        }
    });
}
```

## 3.Currying

- Is when a function does not take all of its arguments upfront instead it wants you to give the first argument and the function returns another function which you are supposed to call with the second argument which in turn will return a new function which you are supposed to call with the thrid argument and so on untill all the arguments have been provided and then the function at the end of the chain will be the one that returns the result.

## 4.Recursion

- Recursion is a function that calls itself untill a condition is met.
- Recursion in ES6 does not have any limitation, in the previous js if you do not provide any condition the recusion reach a certain level then stop, ES6 comes to solve this limitation.

```javascript
const countDownForm = num => {
    if (num===0) return;
    console.log(num);
    countDownForm(num -1);
}

countDownForm(10);
```

## Credits

All credits goes for this youtube course [Functional Programming in Java Script]( https://www.youtube.com/playlist?list=PL0zVEGEvSaeEd9hlmCXrk5yUyqUag-n84)