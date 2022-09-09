/*
SNACK 1
 Creare un array di oggetti di squadre di calcio. 
 Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
 Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
 Generare numeri random al posto degli 0 nelle proprietà:
 punti fatti e falli subiti
*/

const squads = [
    {
        nome: "Napoli",
        punti: 0,
        falli: 0,
    },
    {
        nome: "Juventus",
        punti: 0,
        falli: 0,
    },
    {
        nome: "Milan",
        punti: 0,
        falli: 0,
    },
    {
        nome: "Roma",
        punti: 0,
        falli: 0,
    },
    {
        nome: "Genoa",
        punti: 0,
        falli: 0,
    }
]



squads.forEach((key, index) => {
    key.falli = Math.floor(Math.random() * 100);
    key.punti = Math.floor(Math.random() * 100);
})


console.log(squads)




/*
SNACK 2
 Si scriva una funzione che accetti tre argomenti, 
 un array e due numeri (a più piccolo di b). 
 La funzione ritornerà un nuovo array con i valori 
 che hanno la posizione compresa tra i due numeri.
 */

function splitArray(array, min, max) {
    let newArray = []
    if (min > max) {
        [[min, max] = [max,min]]
    }
    console.log(min, max);

    array.forEach((element, index) => {
        if (index >= min && index <= max) {
            newArray.push(element)
        }
    });


    return newArray;
}


let arrayNumber = [10, 20, 25, 7, 3, 78, 24, 7, 45];

let newNumberArray = splitArray(arrayNumber, 1, 5);


console.log(newNumberArray)





/* 
SNACK 3
 Crea 10 oggetti che rappresentano una zucchina.
 Dividi in due array separati le zucchine che misurano meno o più di 15cm.
 Infine stampa separatamente quanto pesano i due gruppi di zucchine.
 */

const zucchine = [
    {
        peso: 20,
        misura: 15
    },
    {
        peso: 10,
        misura: 5
    },
    {
        peso: 67,
        misura: 20
    },
    {
        peso: 90,
        misura: 8
    },
    {
        peso: 38,
        misura: 23
    },
    {
        peso: 16,
        misura: 10
    },
    {
        peso: 58,
        misura: 29
    },
    {
        peso: 28,
        misura: 27
    },
    {
        peso: 70,
        misura: 4
    },
    {
        peso: 28,
        misura: 19
    },
]

// Dividi in due array separati le zucchine che misurano meno o più di 15cm.
let corte = [];
let lunghe = [];
let pesoLunghe = 0;
let pesoCorte = 0;

zucchine.forEach((key, index) => {
    if (key.misura >= 15) {
        lunghe.push(key)
        pesoLunghe += key.peso;
    }
    else{
        corte.push(key);
        pesoCorte+= key.peso;}
})
// Infine stampa separatamente quanto pesano i due gruppi di zucchine.
console.log("Peso corte: "+ pesoCorte,"Peso lunghe: "+ pesoLunghe)

