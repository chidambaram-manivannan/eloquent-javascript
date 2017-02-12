//A function to count the number of 'B's
function countBs(x){
    var numberOfB = 0;
    for(var count=0; count<x.length; count++){
        if(x.charAt(count)==='B') numberOfB += 1;
    }
    return numberOfB;
}

console.log(countBs('ButterBeans'));

//A function to find the number of characters of a specific character in a string
function countChar(givenString, wantedChar){
    var numberOfChar = 0;
    for(var count = 0; count<givenString.length; count++){
        if(givenString.charAt(count) === wantedChar) numberOfChar += 1;
    }
    return numberOfChar;
}

console.log(countChar('chitterchat','c'));