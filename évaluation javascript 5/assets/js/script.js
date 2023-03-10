function validerForm(){
    var name = document.getElementById('name');
    var prenom = document.getElementById('prenom');
    var date = document.getElementById('date');
    var cp = document.getElementById('code-postal');
    var adresse = document.getElementById('adresse');
    var ville = document.getElementById('ville');
    var email = document.getElementById('email');
    var filtreEmail = new RegExp(/^[\w-\.]+@([\w-]+\.)+[\w-]+$/);
    var filtreCodePostal = new RegExp(/^[0-9]{5}$/);

    if (!name.value){
        alert("Le nom n'est pas valide.");
        return false;
    }
    if (!prenom.value){
        alert("Le prenom n'est pas valide.");
        return false;
    }
    if (!date.value){
        alert("Le date n'est pas valide.");
        return false;
    }
    console.log(filtreCodePostal);
    if (!filtreCodePostal.test(cp.value)){
        alert("Le cp n'est pas valide.");
        return false;
    }
    if (!adresse.value){
        alert("Le adresse n'est pas valide.");
        return false;
    }
    if (!ville.value){
        alert("Le ville n'est pas valide.");
        return false;
    }
    if (!filtreEmail.test(email.value)){
        alert("Le email n'est pas valide.");
        return false;
    }
    console.log('?');
    alert('Formulaire validé !');
    return true
}
