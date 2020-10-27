// Fist example
var me = 'Dina';
function greetMe(){
    // The function is a closure, it can access the global variable me
    console.log(`Hello ${me}`);
}
var me ='Lili';
greetMe();

// 2nd example that shows the utility of closures.

function sendRequest(){
    var requestID = '123'
    $.ajax({
        url: '/myUrl',
        success: function(response){
            alert(`Request ${requestID} returned`);
        }
    });
}