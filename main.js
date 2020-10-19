console.log("October 19")



function add(a, b) {
    return a + b;
}

console.log(add(9, 5))



function multiply(number, times) {
    let product = 0

    while (times > 0) {
        times = times - 1;
        product = add(number, product);
    }
    return product
}

console.log(multiply(4, 5))




function power(base, exponent) {
    let product = 1;
    while (exponent > 0) {
        product = multiply(product, base);
        exponent--;
    }
    return product
}

console.log(power(3, 3))

function factorial(n) {
    let product = 1
    factor = n - 1
    while (n > 0) {
        product = multiply(n, product);
        n--;
    }
    return product
}

console.log(factorial(5))



// function fibonacci(n) {
//     count = 0

//     fib = [0]

//     while (fib.length < n){

//         fib.push(count);
//         count + 1;


//         console.log(fib.length)
//     }
//     return fib.indexOf
// }
