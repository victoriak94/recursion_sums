
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

//What if there are symbols and uppercase letters in the string?

function checkPalindrome(string) {

    // Strip out non-alphanumeric characters
    let cleanWord = string.replace(/[^a-z0-9]/gi,'');
    
    // Make all characters the same casing
    cleanWord = cleanWord.toLowercase();

    // Now we can evaluate for palindrome
    return isPalindrome(cleanWord);
}

console.log(checkPalindrome("Madam, I'm Adam"));
console.log(checkPalindrome('A man. A plan. A canal. Panama.'));

