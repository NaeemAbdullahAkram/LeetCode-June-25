var minMaxDifference = function(num) {
    let str=num+"", i=0;
    while(str[i]==9){i++};

    let max=str.replaceAll(str[i], 9);
    let min=str.replaceAll(str[0], 0);
    return max-min;    
};