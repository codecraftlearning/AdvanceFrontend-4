//write aprogram to check wheather a string is palindrome of not.
//eg: "madam" is palindrome, because if we revere the string, it still is "madam".

function isPalindrome(st) {
    let reverse = '';
    for(let i = st.length-1; i>=0; i--) {
        reverse += st[i];
    }

    if (reverse === st) {
        return 'Palindrome';
    } else {
        return 'Not Palindrome'
    }
}

function isPalindrome2(st) {
    for(let i = 0; i<st.length/2; i++) {
        if (st[i] !== st[st.length-1-i]) {
            return 'Not Palindrome';
        }
    }

    return "Palindrome";
}


let st = "madam";
console.log(isPalindrome(st));
console.log(isPalindrome2(st));
