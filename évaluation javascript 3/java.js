var tab = ["audrey", "aurélien", "flavien", "jérémy", "laurent", "melik", "nouara", "salem", "samuel", "stéphane"];
console.log (tab);

let search = prompt ("Ecrivez un prénom à rechercher dans le tableau \nAttention aux accents! :)");
search = search.toLowerCase();
var searching = tab.indexOf(search);

if ( searching != -1)
{
    document.write ("<br><br> Trouvé! <br> Vous avez trouvez le prénom " + search);
    tab.splice(searching, 1);
    tab.push(" ");
    console.log ("nouvel array: " + tab);
}
else
{
    document.write ("<br><br> Perdu! <br> Le prénom " + search + " n'est pas dans la liste!");
    trouve = false;
}

console.log (tab);