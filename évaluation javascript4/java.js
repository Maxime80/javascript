PU = parseFloat(prompt("Saisissez le prix unitaine du produit"));
QTECOM = parseFloat(prompt("Saisissez la quantité souhaité"));
TOT = PU*QTECOM;
PORTINI = 0;

// CALCULE REMIS

if (TOT <= 100) {
    REM = "0";
    REMPOUR = "0%";
}

else if (TOT <= 200) {
    REM = (TOT * 0.05);
    TOT = TOT - REM;
    REMPOUR = "5%";
}

else if (TOT > 200) {
    REM = (TOT * 0.10);
    TOT = TOT - REM;
    REMPOUR = "10%";
}

else {
    alert ("Une des données saisies n'était pas un nombre!")
}

// CALCUL PORT

if (TOT < 500) {
    PORT= TOT * 0.02;

    //// AJOUT PORT MINIMAL A 6E
    if (PORT < 6) {
        PORTINI = PORT;
        PORT = 6;
    }

    TOT_PORT= TOT + PORT;
    PORTPOUR = "2%";
}

else {
    PORT= TOT * 0.0;
    TOT_PORT= TOT + PORT;
    PORTPOUR = "0%";
}

// OUTPUT REM

document.write (" Remise de " + REMPOUR + " (-" + REM + "€)" + "<br> Total sans frais de: " + TOT.toFixed(2) +"€;");

// OUTPUT PORT

if (PORT !=6){
    document.write (" avec frais de port de " + PORTPOUR + " soit +" + PORT.toFixed(2) + "€ à payer" + "<br> Pour un total de: " + TOT_PORT.toFixed(2) + "€");
}

else {
    document.write (" avec frais de port de " + PORTPOUR + " soit +" + PORTINI.toFixed(2) + ", donc le minimum s'applique, soit +" + PORT.toFixed(2)
     + "€ à payer" + "<br> Pour un total de: " + TOT_PORT.toFixed(2) + "€");
}