function calculateTip(event) {
    event.preventDefault();
    let bill = document.getElementById('bill').value;
    let serviceQual = document.getElementById('serviceQual').value;
    let numOfpeople = document.getElementById('people').value;

    if(bill == '' | serviceQual == 0) {
    alert("Por favor, preencha os valores")
    return;
    }

    if(numOfpeople == '' | numOfpeople <=1) {
        numOfpeople =1;
        document.getElementById('each').style.display = "none"
    } else {
        document.getElementById('each').style.display = "block"
    }

    let total = (bill * serviceQual) / numOfpeople;
    total = total.toFixed(2);
    document.getElementById('Tip').innerHTML = total;
    document.getElementById('TotalTip').style.display = "block"


}
document.getElementById('TotalTip').style.display = "none";
document.getElementById('each').style.display = "none";

document.getElementById('TipsForm').addEventListener('submit',calculateTip);