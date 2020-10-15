console.log("October 13")



function add(a, b) {
    return a + b;
}

console.log(`add function of 4 & 5 = ${add(4, 5)}`)



function multiply(number, times) {
    let product = 0

    while (times > 0) {
        add(number, product);
        times = times - 1;
        product += number;
    }
    return product
}

console.log(`multiply function of 4 & 5 = ${multiply(4, 5)}`)


function power(base, exponent) {

    //put the n into multiply and reduce x once for every iteration

    for(i=0; i < exponent - 1; i++) {
        // let product = 0
        multiply(base, base)
        base += base;
    }
    return base
}








// function power(base, exponent) {  // base --> 2 ^ 8 <-- exp. =  product 256
    
//     let product = 0
//     for(i=0; i < exponent; i++;) {
//         return multiply(base, base);


//     }
//     
// }