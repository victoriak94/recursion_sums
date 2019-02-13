
function isPalindrome(string){
    if(string.length < 2) {
        return true;
    }
    else {
        var first = ss[0];
        var last = ss[ss.length -1];

        if (first !== last) {
            return false;
        } else {
            var middle = ss.substr(1, ss.length -2);
            return isPalindrome(middle);
        }
    }
}

console.log(isPalindrome(''));
console.log(isPalindrome('racecar'));
console.log(isPalindrome('hello'));