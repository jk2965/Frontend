const calculator ={
    add: function(a,b){
        return a+b;
    },
    contract: function(a,b){
        return a-b;
    },
    multiply: function(a,b){
        return a*b;
    },
    devide: function(a,b){
        if(b == 0){
            console.log("You can't devide as 0");
        }else{
            return a/b;
        }
    },
    power: function(a,b){
        return a**b;
    },
}

let plusResult = calculator.add(2,5);
let contractResult = calculator.contract(3,7);
let multiplyResult = calculator.multiply(4,3);
let devideResult = calculator.devide(10,2);
let powerResult = calculator.power(2,2);

console.log(plusResult);
console.log(contractResult);
console.log(multiplyResult);
console.log(devideResult);
console.log(powerResult);