function DevinerNombre() {
    let nombreADeviner = Math.floor(Math.random() * 20);
    let essai = 1;
    const nombreEssaiAutorise = 4;

    let nombreDevine = parseInt(prompt("Veuillez entrer un nombre entier entre de 0 à 20 inclusivement. Vous avez 4 essais. Essai 1"));
    
    let nombreTrouve = false;
    while (essai <= nombreEssaiAutorise)
    {
        if (isNaN(nombreDevine)) {
            break;
        }

        if (nombreDevine < nombreADeviner && essai != nombreEssaiAutorise) {
            nombreDevine = parseInt(prompt(`Incorrect, il vous reste ${nombreEssaiAutorise - essai} essais. Veuillez entrer un nombre plus grand que ${nombreDevine}, mais inférieur ou égal à 20`));
        }
        else if (nombreDevine > nombreADeviner && essai != nombreEssaiAutorise) {
            nombreDevine = parseInt(prompt(`Incorrect, il vous reste ${nombreEssaiAutorise - essai} essais. Veuillez entrer un nombre plus petit que ${nombreDevine}, mais supérieur ou égal à 0`));
        }
        else if (nombreDevine == nombreADeviner){
            nombreTrouve = true;
            alert(`Vous avez bien deviné le nombre ${nombreADeviner}. Bravo!`)
            break;
        }

        essai++;
    };

    if (!isNaN(nombreDevine) && !nombreTrouve) {
        alert("Désolé, vous avez perdu. Le nombre qu’on cherchait est " + nombreADeviner);
    }
}



