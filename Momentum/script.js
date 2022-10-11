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

calculator.add(2,5);
calculator.contract(3,7);
calculator.multiply(4,3);
calculator.devide(10,2);
calculator.power(2,2);