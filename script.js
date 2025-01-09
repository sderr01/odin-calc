let display = document.getElementById("output");
let displayContent = "";
let calculator = document.getElementById("buttons");
let runningToal, x, y, operator;



// operator functions

function add(x,y){
    return x + y;
}
function sub(x,y){
    return x - y;

}
function mult(x,y){
    return x * y;

}
function div(x,y){
    return x / y;

}


// choosing the correct operator

function operate(x, y, operator){
    if (operator == "+"){
        add(x,y);
    }
    else if (operator == "-"){
        sub(x,y);
    }
    else if (operator == "*"){
        mult(x,y);
    }
    else if (operator == "/"){
        div(x,y);
    }
}


// testing for operators, returns true if num, false if operator
// based on classes est in html file
function isNum(classlist){
    return classlist.contains("number");
}

// thank u google, looked up js check classlist, returns t/f

calculator.addEventListener("click", function(num){
    let val = num.target.value;
    let classlist = num.target.classList;
    // console.log(classlist.contains("number"));
    console.log(isNum(classlist));

    
    // console.log(e.target.value);
    // displayContent += e.target.value;
    // display.textContent = displayContent;

})

