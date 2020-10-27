# Functional Programming in Java Script

This is practical examples to learn functional programming.

## Run codes

- `npm init`
- `npm install`
- to run a js code we use `node namefile.js`

## Closures

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

## Credits

All credits goes for this youtube course [Functional Programming in Java Script]( https://www.youtube.com/playlist?list=PL0zVEGEvSaeEd9hlmCXrk5yUyqUag-n84)