// gets the value of the button pressed
// if the value is a number it will add to the temp string
// if AC is recorded, it resets everything
// if CE is recorded, it resets the last entry
// if x is recorded, it adds a * to the entries
// if ÷ is recorded, it adds a / to the entries
// if = is recorded, it loops through the entries array
    // sets next number
    // if a symbol pops up it does what that symbol says
// if the value is less than 0 then return a negative number
// pushes the number

// var inputLabel = document.getElementById('display');
     
// function buttonClicked(obj) {
//     var clicked = obj.innerHTML;
//         if (clicked == '=') {
//             inputLabel.innerHTML = eval(inputLabel.innerHTML);
//         } else if (clicked == 'AC') {
//             inputLabel.innerHTML = '0';
             
//         } else {
//             if (inputLabel.innerHTML == '0') {
//                 inputLabel.innerHTML = clicked;
                 
//     } else {
//                 inputLabel.innerHTML += clicked;   
//             }
//         }
//     }
function buttonClicked(num) {
    if (document.getElementById("display").innerHTML == 0) {
        document.getElementById("display").innerHTML = num;
    } else{
    document.getElementById("display").innerHTML += num;
    }
}