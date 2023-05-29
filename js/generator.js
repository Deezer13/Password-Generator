let arr2 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
let arr3 = ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "a", "s", "d", "f", "g", "h", "j", "k", "l", "z", "x", "c", "v", "b", "n", "m"];
let arr4 = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P", "A", "S", "D", "F", "G", "H", "J", "K", "L", "Z", "X", "C", "V", "B", "N", "M"];
let arr5 = ["!", "@", "#", "$", "%", "&", "?"];

document.querySelector("#param-1").oninput = function() {
    // console.log(this.value);
    document.querySelector("#password-length").innerHTML = this.value;
}

generatePass();
document.querySelector("#generator").onclick = generatePass;

function generatePass() {
    let res = [];
    if (document.querySelector("#param-2").checked) {
        res = res.concat(arr2);
    }
    if (document.querySelector("#param-3").checked) {
        res = res.concat(arr3);
    }
    if (document.querySelector("#param-4").checked) {
        res = res.concat(arr4);
    }
    if (document.querySelector("#param-5").checked) {
        res = res.concat(arr5);
    }
    // console.log(res);
    document.querySelector("#out").innerHTML = "";
    for (let j = 0; j < 5; j++) {
        let out = "";
        for (let i = 0; i < document.querySelector("#param-1").value; i++) {
            out += res[randomInteger(0, res.length - 1)];
        }
        document.querySelector("#out").innerHTML += "<p>" + out + "</p>";
    }
}

function randomInteger(min, max) {
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
}