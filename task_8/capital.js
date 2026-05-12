// let text = "javascript";
// let capital = text.at(0).toUpperCase() + text.slice(1) ;
// console.log(capital); 



function anagram(text1, text2) {
    let arr1 = text1.split("");
    let arr2 = text2.split("");
    let count = 0;

    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr2.length; j++) {

            if (arr1[i] == arr2[j]) {
                count++;
                arr2[j] = 0;
                break;
            }
        }
    }
    if (count == arr1.length) {
        console.log("It is Anagram");
    } else {
        console.log("It is not an Anagram");
    }
}

anagram("lead", "deal");