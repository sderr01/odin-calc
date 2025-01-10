let display = document.getElementById("output");
let displayContent = "";
let calculator = document.getElementById("buttons");
let result;
let x = "";
let y = "";
let operator = "";
let runningTotal = false;



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

function updateDisplay(val){
    displayContent += val;
    display.textContent = displayContent;
}



calculator.addEventListener("click", function(btn){
    let val = btn.target.value;
    let classlist = btn.target.classList;
    
    // if number, add to x as string and update display
    if(isNum(classlist)){
        runningTotal ? y+=val : x+=val;
        updateDisplay(val);        
    }
    // if operator, store operator and x, switch operator flag to true, start y val
    else if (isOp(classlist)){
        // no running total, only have first number
        if (!runningTotal){
            operator = val;
            runningTotal = true;
            updateDisplay(val);
        }
        // after first operator, add two numbers and make x the total
        // clear y and update display with new total + operator
        else if (runningTotal){
            let temp = operate(parseInt(x), parseInt(y), operator);
            x = temp;
            y = "";
            displayContent = "";
            display.textContent = "";
            updateDisplay(x+val);
            operator = val;
        }
    }
    // if equal, send to operate function
    else if (isEquals(classlist)){
        result = operate(parseInt(x), parseInt(y), operator);
        let testval = val + result;
        updateDisplay(testval);
    }
    else if (isClear(classlist)){
        runningTotal = false;
        x = "";
        y = "";
        operator = "";
        result = "";
        displayContent = "";
        display.textContent = "";

    }


    
    

})

