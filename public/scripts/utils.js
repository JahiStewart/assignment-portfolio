const validtrs = []
function makeValidator(id) {
    validtrs.push(document.getElementById(id))
    let x = validtrs.length - 1
    validtrs[x].addEventListener("input", function (event) {
        if (validtrs[x].validity.typeMismatch) {
          validtrs[x].setCustomValidity("I am expecting an e-mail address!");
        } else {
        validtrs[x].setCustomValidity("");
        }
    });
}

