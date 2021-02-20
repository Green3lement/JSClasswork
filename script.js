function factorize(n) {
    var factors = [];
    for(var i=0; i <= n; i++){
        if(n % i == 0) {
            factors.push(i);
        }
    }
    return factors;
}

function findUnique(str) {
    var uniqueString = "";
    for (var i=0; i < str.length; i++) {
        if(uniqueString.indexOf(str.charAt(i)) == -1) {
            uniqueString += str[i];
        }
    }
    return uniqueString;
}

function doOperation(x, y, operator) {
    return operator(x, y);
}

function multiply(x, y) {
    return x * y;
}

function power(x, y){
    return Math.pow(x, y);
}