function calculDiff() {
    let deconfinement = new Date(2020, 04, 11, 00, 00, 0)
    let maintenant = new Date()
    let diff = {}
    diff.total = deconfinement - maintenant
    diff.jours = Math.floor(diff.total/(1000*60*60*24))
    diff.heures = Math.floor((diff.total/(1000*60*60)) % 24)
    diff.secondes = Math.floor( (diff.total/1000) % 60 );
    return diff
    
}
d = calculDiff()
document.querySelector("#affichage").innerHTML = `Il reste ${d.jours} jours, ${d.heures} heures et ${d.secondes} secondes`

setInterval(() => {
    d = calculDiff()
    document.querySelector("#affichage").innerHTML = `Il reste ${d.jours} jours, ${d.heures} heures et ${d.secondes} secondes`
}, 1000);

