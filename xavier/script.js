function calculDiff() {
    let deconfinement = new Date(2020, 04, 11, 00, 00, 0)
    let maintenant = new Date()
    let diff = {}
    diff.total = deconfinement - maintenant
    diff.jours = Math.floor(diff.total/(1000*60*60*24))
    diff.heures = Math.floor((diff.total/(1000*60*60)) % 24)
    diff.minutes = Math.floor((diff.total/(1000*60)) % 60)

    diff.secondes = Math.floor( (diff.total/1000) % 60 )
    return diff

}
function fix(num) {
    return num.toString().padStart(2, 0);
}

d = calculDiff()
document.querySelector("#affichage").innerHTML = `Il reste ${d.jours} jours, ${d.heures} heures, ${fix(d.minutes)} minutes et ${fix(d.secondes)} secondes`

setInterval(() => {
    d = calculDiff()
    document.querySelector("#affichage").innerHTML = `Il reste ${d.jours} jours, ${d.heures} heures, ${fix(d.minutes)} minutes et ${fix(d.secondes)} secondes`

}, 1000);

setTimeout(() => {
    document.querySelector("#imotep").removeAttribute("hidden")
}, 2000);  

setTimeout(() => {

    setInterval(() => {
        
        document.querySelector("#alternative").innerHTML = `Ou bien ${Math.round(Math.random()*72)+27} jours, ${fix(Math.round(Math.random()*24))} heures, ${fix(Math.round(Math.random()*24))} minutes et ${fix(Math.round(Math.random()*60))} secondes `
    }, 1200);
    
    setTimeout(() => {
        document.querySelector("#ane").removeAttribute("hidden")
    }, 5000);  
}, 3000);
