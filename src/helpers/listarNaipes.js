import _ from 'underscore';



export const listarNaipes = () => {
    let tipos = ["C", "D", "H", "S"];
    let deck = [];
    let especiales =["A", "J", "Q", "K"];

    for(let i = 1 ; i <= 10; i++){
        for (const tipo of tipos) {
            deck.push(i + tipo)
        }
    }
    for (const tipo of tipos) {
        for (const esp of especiales) {
            deck.push(esp + tipo)
        }
    }

    deck = _.shuffle(deck);
    return deck;

}
