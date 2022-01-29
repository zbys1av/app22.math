let text = document.getElementById("math");
let bestresult = document.getElementById("mybest");


let actions = ['/','*','+','-'];
let ranact = actions[Math.floor(Math.random() * actions.length)];

function getRandomInt(num){
    return Math.floor(Math.random()*num);
}

let rn1 = getRandomInt(10);
let rn2 = getRandomInt(10);
let results = parseInt(rn1 + ranact + rn2);
let count = 0;
text.innerHTML = rn1 + " + " + rn2 + " = ";

function check(){
    if (document.getElementById("answer").value == results){
        count++;
    } else {
        count=0;
    }
    getRandomInt(999);
    console.log(count);
    console.log(rn1 + " + " + rn2 + " = ");
    console.log(results);
}

console.log("ID: "+ text.innerHTML);