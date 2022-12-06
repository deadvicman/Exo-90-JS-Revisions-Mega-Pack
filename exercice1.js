maFonction();
//1er point je crée ma variable et lui assigne une valeur.
let nomVoiture = "Peugeot";

//2eme points je crée ma variable x et lui assigne une valeur.
let x = 50;

//3eme points je crée un span avec comme id "demo".
let span = document.createElement("span");
span.id = "demo";
document.body.append(span);

//4eme points je crée ma variable z et w afin de pouvoir les calculer.
const z = 5;
const w = 10;
document.getElementById("demo").innerText = `z vaux ${z}, w vaux ${w}, le résultat est ${z+w}`;

//5eme points je cré une variable d pour assigner le resultat de mes 2 précédentes variables.
d = z+w;
alert(d);

//6eme points déclare 3 variables.
let nom = "doe"; let prenom = "john"; let age = 35;

//7eme points affiche dans une alerte le resultat de 10*5.
alert(10*5);

//8eme point
alert(10/2);
alert(15%9);

//9eme points déclaration de 2 variables.
let i = 10; let k = 5; i += k;

//10eme point créer une fonction.
function maFonction() {
    alert("Salut tout le monde !");
}

//11eme points créer une autre fonction.
function maFonctionDeRetour() {
    return ("Bonjour!")

}
let divRetour = document.getElementById("demoRetour");
divRetour.innerText = maFonctionDeRetour();

//12eme points créer un bouton.
monBouton = document.createElement("input");
monBouton.type = "button";
monBouton.id = "monBoutton";

//13eme points ajoute un evenement par click.
monBouton.addEventListener("click", function () {
    alert();
})

//14eme points créer une div.
let divHover = document.createElement("div");
divHover.id = "ChangeSurOver";
divHover.addEventListener("mouseover", function () {
    divHover.color = "red";
})

//15eme points créer une variable txt.
let txt = "une longue phrase";
let longueur = txt.length;
alert(longueur);

//16eme points créer 2 variables.
let str1 = "Bonjour";
let str2 = "le monde";
alert(`${str1} ${str2}`);

//17eme points créer un tableau.
let listeVoitures = [
    "Renault",
    "Volvo",
    "Citroen",
];
listeVoitures.splice(1,0, nomVoiture);

//18eme points changer la 1ere valeur du tableau.
listeVoitures[0] = "Ford";

//19eme points affichage de la longueur du tableau listeVoitures dans une alert.
alert(listeVoitures.length);

//20eme points supprimer le dernier élément du tableau listeVoitures.
listeVoitures.pop();

//21eme points ajouter la valeur "Ferrari" en fin de tableau.
listeVoitures.push("Ferrari");

//22eme points créer une variable rNumber et lui associer une valeur aléatoire.
let rNumber = Math.random();

//23eme points créer une variable fNumber avec un chiffre a virgule comme valeur.
let fNumber = 15.7
fNumber = Math.round(fNumber);

//24eme points créer 2 variables avec condition n1 supérieur a n2.
let nombreUn = 10;
let nombreDeux = 5;
if (nombreUn > nombreDeux){
    alert("nombreUn est supérieur à nombreDeux");
}

//25eme points créer 2 variables avec condition n3 égale n4.
let nombreTrois = 10;
let nombreQuatre = 10;
if (nombreTrois === nombreQuatre){
    alert("nombreTrois est égale à nombreQuatre");
}

//26eme points condition pour vérifier si 2 nombre sont différents.
if (nombreUn !== nombreDeux){
    alert("nombreUn est différent de nombreDeux");
}

//27 cree ue boucle de 0 a 9.
for (let i = 0; i <= 9; i++){
    console.log(i);
}

//28eme points créer un tableau "fruits".
let fruits = [
    "pomme",
    "banane",
    "poire",
];

for (let i = 0; i <fruits.length; i++){
    console.log(i);
}

//29eme points
let isolo = 0;
while(isolo < 10){
    isolo++;
}

//30eme points
let isol = 0;
while(isol < 10){
    isol += 2;
}

//31eme points
let iso = 0;
while(iso < 10){
    if (iso === 5){
        alert("Message aléatoire");
    }
    iso++;
}