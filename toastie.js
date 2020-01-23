// make the toastie function
// add paramaters (quant and filling)
// if 1 toastie -> print monsiuer
// if more than 1 -> else if add 's' to monsieur
function makeToastie (quantity, filling) {
    if (quantity === 1) {
        console.log(quantity + ' ' + filling + ' ' + "monsieur coming up")
    }
    else if(quantity > 1){
        console.log(quantity + ' ' + filling + ' ' + "monsieur's coming up")
    }
}
makeToastie(4, "ham");
makeToastie(1, "tuna");
makeToastie(12, "pork chop");
makeToastie(500000, "whale");

function add(x, y) {
    return x + y  //how to get the answer out (return)
}

var result = add(1, 2);

console.log(result);