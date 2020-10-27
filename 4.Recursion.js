// Recurstion simple example
const countDownForm = num => {
    if (num===0) return;
    console.log(num);
    countDownForm(num -1);
}

countDownForm(10);
