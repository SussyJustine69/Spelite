//Jānolasa ievadītais
//Jaizvēlās skaitlis (datoram)
//Jāpārbauda ievadītais
//Jāizvada atbilde

let datoraSkaitlis = 10;

function izvaditAtbildi(atbilde){
document.getElementById("atbilde").innerHTML=atbilde;

}

 function nolasitIevadito(){
let ievaditais = document.getElementById("apple").value;
console.log(ievaditais);
return ievaditais;

 }
function salidzinatSkaitlus(cilvekaSkaitlis){
if (isNaN(cilvekaSkaitlis)){return "Ievadi skaitli mūllāp"};
if (cilvekaSkaitlis>datoraSkaitlis){ return "datora skaitlis ir mazāks, ka tavs pincits"};
if(cilvekaSkaitlis<datoraSkaitlis){ return "datora skaitlis ir lielāks idiņ"};
return "OPAAA TEV NAV MAZS PINCITS";
}


 function veiktParbaudi(){
console.log("Pārbaudīts!", datoraSkaitlis);
let minejums = nolasitIevadito();
let rezultats = salidzinatSkaitlus(minejums);
izvaditAtbildi(rezultats);
 }

 function nomainitskaitli(){
datoraSkaitlis = Math.round(Math.random()*100);
console.log(datoraSkaitlis);
izvaditAtbildi("Jauna Spēle");
 }