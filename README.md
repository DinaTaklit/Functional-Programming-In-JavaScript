# Functional Programming in Java Script

This is practical examples to learn functional programming.

## Run codes

- `npm init`
- `npm install`
- to run a js code we use `node namefile.js`

## 0.map

## 1.Reduce

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

## 5.Promises

- One of the big things about functional programming is to make your code more composable.
- Callbacks is a way of telling your code that when this thing is done execute this piece of code.
- Promises serve the same purpose as callbacks do but promises are bit more powerful coz unlike callbaks they are composable.

## 6.Functors

- A functor is an object that has map mthod. Arrays in JavaScript implement map and are therefor functors. Promises, streams and trees often impelemnt map in functiona programming languges and when they do they are considered functors.

- The map method of the functor takes the functor contents and transform them using the transformation callbak that is passed to map, that returns a new functor of the same type which contains the transform values.

## 7.Streaming

- Straming is once an array and promises get married and have a baby loool.
- An array that is a series of multiple objects that are already there while a promise is a notion of a single object that might be there eventually.
- A stram is a throw of values that will arrive whenever they just bloody well feel like lol.

## 8.Monad

- Monad is a more powereful functor that impelemnts `flatmap`.
- `flatmap` has same priciple as map with the exception that if the callback is passed to falt map returns a monad of the same type. If we call `flatmap` upon a stream it returns the stream mondal that will be **flattend into  it is containing value** before it is passed on and that is why we can call map directly after `flatmap`.

## Credits

All credits goes for this youtube course [Functional Programming in Java Script]( https://www.youtube.com/playlist?list=PL0zVEGEvSaeEd9hlmCXrk5yUyqUag-n84)
