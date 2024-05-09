const priceForKm = '0.267113';
const discountYoung = '24.552';
const discountOld = '37.893';
const bottone = document.querySelector('button')

// let price = userKM * priceForKm;


bottone.addEventListener('click', function () {
    const userKM = document.querySelector('#distance').value
    const userAge = document.querySelector('#age').value
    let comparisonA = userAge < 21;
    let comparisonB = userAge > 63;
    let price
    let discount
    let finalPrice

    if (comparisonA === true) {
        let price = userKM * priceForKm;
        let discount = (price / 100) * discountYoung
        let finalPrice = (price - discount);
        document.querySelector('#pricecalc').innerHTML = price.toFixed(2) + ' - ' + discount.toFixed(2) + ' = ' + finalPrice.toFixed(2)
    } else if (comparisonB == true) {
        let price = userKM * priceForKm;
        let discount = (price / 100) * discountOld
        let finalPrice = (price - discount);
        document.querySelector('#pricecalc').innerHTML = price.toFixed(2) + ' - ' + discount.toFixed(2) + ' = ' + finalPrice.toFixed(2)
    } else {
        let price = userKM * priceForKm;

    }

    document.querySelector('#showage').innerHTML = userAge + ' anni'
    document.querySelector('#showkm').innerHTML = userKM + ' km'
})

