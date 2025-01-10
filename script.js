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
        // logic: op is no, means we're only starting x
        // op is true, starting on y
        // op is found again and still true, do calculation and make result x, keep op true
        // op only turned false if we hit equals
        // so really, inputOperator is actually a runningTotal flag, telling us if we need to start a running total.

        console.log(x, operator, runningTotal,y);
        
    }
    // if operator, store operator and x, switch operator flag to true, start y val
    else if (isOp(classlist)){
        // no running total, only have first number
        if (!runningTotal){
            operator = val;
            runningTotal = true;
            console.log(x, operator, runningTotal);
            updateDisplay(val);
        }
        else if (runningTotal){
            let temp = operate(parseInt(x), parseInt(y), operator);
            console.log(temp,y);
            x = temp;
            y = "";
            displayContent = "";
            display.textContent = "";
            updateDisplay(x);
        }
        
    }
    // if equal, send to operate function
    else if (isEquals(classlist)){
        console.log(parseInt(x), parseInt(y), operator);
        result = operate(parseInt(x), parseInt(y), operator);
        runningTotal = false;
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

