var applicantName = document.getElementById('applicantName');
var applicantAge = document.getElementById('applicantAge');
var applicantMonthlyInome = document.getElementById('applicantMonthlyIncome');
var applicantHloanEMI = document.getElementById('applicantHloanEMI');
var applicantPloanEMI = document.getElementById('applicantPloanEMI');
var applicantChqBounces = document.getElementById('applicantChqBounces');
var appliantCompanyTier = document.getElementById('applicantCompanyTier');
var applicantOwnHouse = document.getElementById('applicantOwnHouse');
var applicantSpouseWorking = document.getElementById('applicantSpouseWorking');
var applicantDependantParents = document.getElementById('applicantDependantParents');

let screen = document.getElementById('display');
let liabilty = applicantHloanEMI + applicantPloanEMI;

function calculate() {
    let score = 0;
    if (applicantAge.value > 22 && applicantAge.value <= 30) {
        score = score + 2;
    }
    if (applicantAge.value > 30 && applicantAge.value <= 35) {
        score = score + 1;
    }
    else {
        score = score - 1;
    }

    if (liabilty <= (applicantMonthlyInome.value/4)) {
        score = score + 5;
    }
    if (liabilty > (applicantMonthlyInome.value/4) && liabilty <= (applicantMonthlyInome.value/3)) {
        score = score + 2;
    }
    if (liabilty > (applicantMonthlyInome.value/3) && liabilty <= (applicantMonthlyInome.value/2)) {
        score = score + 1;
    }
    if (liabilty > (applicantMonthlyInome/2)) {
        score = score - 1;
    }

    if (applicantChqBounces.value > 1) {
        score = score - 2;
    }
    if (applicantChqBounces.value == 1) {
        score = score - 1;
    }
    if (applicantChqBounces.value == 0) {
        score = score + 1;
    }

    if (applicantHloanEMI.value < applicantPloanEMI.value) {
        score = score - 1;
    }
    else {
        score = score + 1;
    }

    if (applicantOwnHouse.value == 'y') {
        score = score + 1;
    }
    else {
        score = score - 1;
    }

    if (applicantSpouseWorking.value == 'y') {
        score = score + 1;
    }
    else {
        score = score - 1;
    }

    if (applicantDependantParents.value == 'n') {
        score = score + 1;
    }
    else {
        score = score - 1;
    }

    if (appliantCompanyTier.value == 1) {
        score = score + 3;
    }
    if (appliantCompanyTier.value == 2) {
        score = score + 2;
    }
    if (appliantCompanyTier.value == 3) {
        score = score + 1;
    }

    if (score > 9) {
        screen.innerHTML = "Name : " + applicantName.value + "<br>Score : " + score + "<br>Risk : Low<br>Credit Can Be Given<br><br>Reload Page To Clear";
    }
    if (score > 5 && score <= 9) {
        screen.innerHTML = "Name : " + applicantName.value + "<br>Score : " + score + "<br>Risk : Average<br>Credit Can Be Given With Precaution<br><br>Reload Page To Clear";
    }
    if (score < 5) {
        screen.innerHTML = "Name : " + applicantName.value + "<br>Score : " + score + "<br>Risk : High<br>Credit Cannot Be Given<br><br>Reload Page To Clear";
    }

    console.log('Score = '+score);
}