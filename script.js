// Function to demonstrate variables and data types
function showDataTypes() {
    // Clear previous console output
    clearConsole();
    
    // Different data types
    let stringVar = "Hello, JavaScript!";
    let numberVar = 42;
    let booleanVar = true;
    let arrayVar = [1, 2, 3, 4, 5];
    let objectVar = {name: "Billy", age: 34,Town: "Eldoret"}
    
    // Log to console
    logToConsole("String: " + stringVar);
    logToConsole("Number: " + numberVar);
    logToConsole("Boolean: " + booleanVar);
    logToConsole("Array: " + arrayVar);
    logToConsole("Object: " + JSON.stringify(objectVar));
    
    // Show in output div
    document.getElementById("dataOutput").innerHTML = `
        <p class="success">Check the console below to see the output!</p>
    `;
}

// Function to perform arithmetic operations
function performOperations() {
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);
    
    if (isNaN(num1) || isNaN(num2)) {
        document.getElementById("operatorOutput").innerHTML = 
            `<p class="error">Please enter valid numbers!</p>`;
        return;
    }
    
    // Perform operations
    const addition = num1 + num2;
    const subtraction = num1 - num2;
    const multiplication = num1 * num2;
    const division = num1 / num2;
    const modulus = num1 % num2;
    
    // Comparison operations
    const isEqual = num1 === num2;
    const isGreater = num1 > num2;
    const isLess = num1 < num2;
    
    // Display results
    document.getElementById("operatorOutput").innerHTML = `
        <p><strong>Arithmetic Operations:</strong></p>
        <p>${num1} + ${num2} = <span class="success">${addition}</span></p>
        <p>${num1} - ${num2} = <span class="success">${subtraction}</span></p>
        <p>${num1} * ${num2} = <span class="success">${multiplication}</span></p>
        <p>${num1} / ${num2} = <span class="success">${division.toFixed(2)}</span></p>
        <p>${num1} % ${num2} = <span class="success">${modulus}</span></p>
        
        <p><strong>Comparison Operations:</strong></p>
        <p>${num1} === ${num2}: <span class="success">${isEqual}</span></p>
        <p>${num1} > ${num2}: <span class="success">${isGreater}</span></p>
        <p>${num1} < ${num2}: <span class="success">${isLess}</span></p>
    `;
    
    // Also log to console
    clearConsole();
    logToConsole(`Performed operations on ${num1} and ${num2}`);
}

// Function to check age using conditionals
function checkAge() {
    const age = parseInt(document.getElementById("ageInput").value);
    
    if (isNaN(age)) {
        document.getElementById("conditionalOutput").innerHTML = 
            `<p class="error">Please enter a valid age!</p>`;
        return;
    }
    
    let message = "";
    
    // Conditional logic
    if (age < 0) {
        message = `<p class="error">Age cannot be negative!</p>`;
    } else if (age < 13) {
        message = `<p class="info">You are a child.</p>`;
    } else if (age < 18) {
        message = `<p class="info">You are a teenager.</p>`;
    } else if (age < 65) {
        message = `<p class="success">You are an adult.</p>`;
    } else {
        message = `<p class="success">You are a senior.</p>`;
    }
    
        
    document.getElementById("conditionalOutput").innerHTML = message;
    
    // Log to console
    clearConsole();
    logToConsole(`Checked age: ${age}`);
}

// Helper function to log to our visual console
function logToConsole(message) {
    const consoleOutput = document.getElementById("consoleOutput");
    consoleOutput.innerHTML += `<div>> ${message}</div>`;
    // Auto-scroll to bottom
    consoleOutput.scrollTop = consoleOutput.scrollHeight;
}

// Helper function to clear the console
function clearConsole() {
    document.getElementById("consoleOutput").innerHTML = "";
}

;