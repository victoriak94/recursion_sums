function reverse(string) {
    if(string.length == 0) {
        return "";
    } else if(string.length == 1) {
        return string;
    } else {
        let last = string[string.length - 1];
        let beginning = string.substr(0, string.length - 1);
        return last + reverse(beginning);
    }
}

console.log(reverse('water bottle'));
console.log(reverse('pacman ghost'));