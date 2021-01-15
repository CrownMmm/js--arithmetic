/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    const stack = [];
    for (let i = 0; i < s.length; i++) {
        const c = s[i];
        if (c === '(' | c === '{' | c === '[') {
            stack.push(c);
        } else {
            t = stack[stack.length - 1];
            if (
                (t === '(' && c === ')') ||
                (t === '{' && c === '}') ||
                (t === '[' && c === ']')
            ) {
                stack.pop();
            } else {
                return false;
            }
        }
    }
    return stack.length === 0;
};


let test1 = "()";
let test2 = "()[]{}";
// console.log(isValid(test1), isValid(test2));
isValid(test2);