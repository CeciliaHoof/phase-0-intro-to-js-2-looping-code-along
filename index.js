// Code your solutions in this file

function writeCards(names, event){
    const cards = [];
    for ( let x = 0; x < names.length; x++ ) {
        cards.push(`Thank you, ${names[x]}, for the wonderful ${event} gift!`);
    };
    return cards;
}
writeCards(["Charlie", "Samip", "Ali"], "birthday");

function countDown(x){
    let countDown = x;
    while (countDown >= 0){
        console.log(countDown)
        countDown --;
    }
}
countDown(10);