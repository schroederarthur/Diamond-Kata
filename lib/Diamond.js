function giveDiamond(letter) {

    //maps the char to corresponding number
    let index = letter.charCodeAt(0) - 64;

    //gets the count of max symbols in a line
    const lettersInLine = 2 * index - 1;
    let diamond = ""

    //creates the part until the middle
    //
    for (let i = 1; i <= index; i++) {
        diamond += createLine(i, lettersInLine)
    }
    //part from middle to bottom
    for (let i = index - 1; i > 0; i--) {
        diamond += createLine(i, lettersInLine)
    }
    //removes the last \n in the last line
    diamond = diamond.substring(0, diamond.length - 1);
    return diamond
}


//creates a line for given Symbol 
function createLine(index, lettersInLine) {

    //Gets the letter and the Symbol between
    let Symbol = String.fromCharCode(index + 64);
    let Space = " "

    //the first line is special
    //the countSpaceBetween would result in wrong string
    if (index == 1) {
        return Space.repeat((lettersInLine - 1) / 2) + Symbol + Space.repeat((lettersInLine - 1) / 2) + "\n";
    }

    //creates the line by calculating the spaces in front and in the middle
    let countSpaceBetween = (index * 2) - 3;
    let countSpacesBeforeAfter = (lettersInLine - countSpaceBetween - 2) / 2;
    return Space.repeat(countSpacesBeforeAfter) + Symbol + Space.repeat(countSpaceBetween) + Symbol + Space.repeat(countSpacesBeforeAfter) + "\n";
}

console.log(giveDiamond("B"))
console.log(giveDiamond("M"))

module.exports = {
    giveDiamond
}


/*----A----
---B-B---
--C---C--
-D-----D-
E-------E
0 -E- 7 -E- 0
E (i*2-3) E*/
