let display = document.getElementById("output");
let displayContent = "";
let calculator = document.getElementById("buttons");
let result;
let x = "";
let y = "";
let operator = "";
let inputOperator = false;



// operator functions

function operate(x, y, operator){
    if (operator == "+"){
        return x + y;
    }
    else if (operator == "-"){
        return x - y;
    }
    else if (operator == "*"){
        return x * y;
    }
    else if (operator == "/"){
        return x / y;
    }
    
}


// testing for operators, returns true if number
// based on classes est in html file
function isNum(classlist){
    return classlist.contains("number");
}

// returns true if operator
function isOp(classlist){
    return classlist.contains("operator");
}

// returns true if operator
function isEquals(classlist){
    return classlist.contains("equal");
}

// returns true if button was clear
function isClear(classlist){
    return classlist.contains("clear");
}



calculator.addEventListener("click", function(btn){
    let val = btn.target.value;
    let classlist = btn.target.classList;
    
    // if number, add to x as string and update display
    if(isNum(classlist)){
        displayContent += val;
        // if operator has not been clicked, add values to x
        // if operator has, add values to y
        inputOperator ? y+=val : x+=val;
        
        console.log(x, operator, inputOperator,y);
        display.textContent = displayContent;
    }
    // if operator, store operator and x, switch operator flag to true, start y val
    else if (isOp(classlist)){
        displayContent += val;
        operator = val;
        inputOperator = true;
        console.log(x, operator, inputOperator);
        display.textContent = displayContent;
    }
    // if equal, send to operate function
    else if (isEquals(classlist)){
        console.log(parseInt(x), parseInt(y), operator);
        console.log(operate(parseInt(x), parseInt(y), operator));
        result = operate(parseInt(x), parseInt(y), operator);
        inputOperator = false;
        displayContent += val;
        displayContent += result;
        display.textContent = displayContent;
    }
    else if (isClear(classlist)){
        inputOperator = false;
        displayContent = "";
        x = "";
        y = "";
        operator = "";
        result = "";
        display.textContent = displayContent;

    }


    
    

})

