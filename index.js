const plus = [
    378009,
    374339,
    372115,
    371649,
    376648,
    377430,
    362659,
    360005,
    353611,
    357335
];

const pareil = 389050;

const moins = [
    383688,
    389260,
    387518,
    392084,
    387790,
    385516,
    381472,
    381883,
    371240,
    363387
];

const inputText = document.querySelector("#input");
const btnAfficher = document.querySelector("#button");
const resultat = document.querySelector("#reponse");
const anner = document.querySelector("#anner");



// Ajouter un événement au bouton
btnAfficher.addEventListener('click', function () {
    // Récupérer la valeur du champ de texte
    const valeur = inputText.value;

    const difference = Math.abs(2006 - valeur);

    let quantiter = pareil;

    if (difference !== 0) {
        for (let i = 0; i < difference; i++) {
            quantiter += plus[i];
            quantiter += moins[i];
        }
    }


    const pourcentage = (1 / quantiter) * 100;
    anner.innerHTML = valeur;
    resultat.innerHTML = `${pourcentage} %`;
});






// 1996	357 335
// 1997	353 611
// 1998	360 005
// 1999	362 659
// 2000	377 430
// 2001	376 648
// 2002	371 649
// 2003	372 115
// 2004	374 339
// 2005	378 009

// 2006	389 050

// 2007	383 688
// 2008	389 260
// 2009	387 518
// 2010	392 084
// 2011	387 790
// 2012	385 516
// 2013	381 472
// 2014	381 883
// 2015	371 240
// 2016	363 387