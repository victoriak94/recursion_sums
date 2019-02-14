
function prettyPrint(oo, indent) {
    indent = indent || "";

    for (var key in oo) {
        var value = oo[key];
        // if the value at the key is complex, then recurse
        if (value.constructor === Object) {
            console.log(indent + key + ":");
            prettyPrint(value, indent + "  ");
        } else {
            // otherwise, do base case and print it out
            console.log(indent + key + ":", value);
        }
    }
}

o1 = {a: 1, b: 2};
o2 = {a: 1, b: 2, c: {name: "Bruce Wayne", occupation: "Hero"}, d: 4};
o3 = {a: 1, b: 2, c: {name: "Bruce Wayne", occupation: "Hero", friends: {spiderman: {name: "Peter Parker"}, superman: {name: "Clark Kent"}}}, d: 4};

// well, JS Bin doesn't actually print these out so pretty.
prettyPrint(o1, "")
console.log();

prettyPrint(o2, "")
console.log();

prettyPrint(o3, "")
console.log();