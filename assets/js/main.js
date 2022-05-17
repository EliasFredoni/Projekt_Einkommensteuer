
'use strict'

const changeInput1 = () => {
    let label2 = document.getElementById('label2');
    let person2 = document.getElementById('person2');

    label2.style.display = 'none';
    person2.style.display = 'none';
}

const changeInput2 = () => {
    let label2 = document.getElementById('label2');
    let person2 = document.getElementById('person2');

    label2.style.display = 'block';
    person2.style.display = 'block';
}

const berechneSteuer = (year) => {
    let zvE = 0;
    let person1 = Number(document.getElementById('person1').value);
    let person2 = Number(document.getElementById('person2').value);
    let showPerson2 = document.getElementById('person2');
    let years = document.getElementById('years').value;
    let ESt = 0;
    let y = 0;
    let z = 0;

    if (showPerson2.style.display === 'block') {
        zvE = (person1 + person2) / 2;
    } else {
        zvE = person1;
    }

    switch (years) {
        case '2019':
            y = (zvE - 9168) / 10000;
            z = (zvE - 14254) / 10000;
            if (zvE <= 9168) {
                ESt = 0;
            } else if (zvE >= 9169 && zvE <= 14254) {
                ESt = (980.14 * y + 1400) * y;
            } else if (zvE >= 14255 && zvE <= 55960) {
                ESt = (216.16 * z + 2397) * z + 965.58;
            } else if (zvE >= 55961 && zvE <= 265326) {
                ESt = 0.42 * zvE - 8780.90;
            } else {
                ESt = 0.45 * zvE - 16740.68;
            }
            break;
        case '2020':
            y = (zvE - 9408) / 10000;
            z = (zvE - 14532) / 10000;
            if (zvE <= 9408) {
                ESt = 0;
            } else if (zvE >= 9409 && zvE <= 14532) {
                ESt = (972.87 * y + 1400) * y;
            } else if (zvE >= 14533 && zvE <= 57051) {
                ESt = (212.02 * z + 2397) * z + 972.79;
            } else if (zvE >= 57052 && zvE <= 270500) {
                ESt = 0.42 * zvE - 8963.74;
            } else {
                ESt = 0.45 * zvE - 17078.74;
            }
            break;
        case '2021':
            y = (zvE - 9744) / 10000;
            z = (zvE - 14753) / 10000;
            if (zvE <= 9744) {
                ESt = 0;
            } else if (zvE >= 9745 && zvE <= 14753) {
                ESt = (995.21 * y + 1400) * y;
            } else if (zvE >= 14754 && zvE <= 57918) {
                ESt = (208.85 * z + 2397) * z + 950.96;
            } else if (zvE >= 57919 && zvE <= 274612) {
                ESt = 0.42 * zvE - 9136.63;
            } else {
                ESt = 0.45 * zvE - 17374.99;
            }
            break;
        default: ESt = 0;
    }
    ESt = ESt.toFixed(2);

    let ausgabe = document.getElementById("ausgabe");
    ausgabe.innerHTML = (ESt + " € ").replace('.', ',');

    let ausgabe2 = document.getElementById("ausgabe2");
    let kirchensteuersatz = document.getElementById("kirchensteuersatz").value;
    let kirchensteuer = (kirchensteuersatz * ESt).toFixed(2);
    ausgabe2.innerHTML = (kirchensteuer + " € ").replace('.', ',');
}


