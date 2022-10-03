timeout_length = 1000;



function set_number(NumberToSet) {
    document.getElementById("currentNumber").textContent = NumberToSet;
}

function get_number() {
    return Number(document.getElementById("currentNumber").textContent);
}

function increment_number() {
    // Increments the number by one
    set_number(get_number() + 1);



    // Starts (or resets) the timeout for 10 seconds
    if (typeof finishTimeout !== 'undefined') {
        clearTimeout(finishTimeout);
    }
    finishTimeout = setTimeout(timeout, timeout_length);
}

function timeout() {
    if(confirm("Is " + get_number() + " your number?")) {
        alert("Thanks, number saved!");
        document.getElementById("incrementButton").removeAttribute("onclick");
        document.getElementById("incrementButton").disabled = true;
    }
    else {
        set_number(0);
    }
}