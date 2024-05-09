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


    if (comparisonA === true) {
        let price = ((userKM * priceForKm) - ((userKM * priceForKm) / 100) * discountYoung)


    } else if (comparisonB == true) {
        let price = ((userKM * priceForKm) - ((userKM * priceForKm) / 100) * discountOld)
        console.log(price.toFixed(2) + '€');
    } else {
        let price = (userKM * priceForKm)
        console.log(price.toFixed(2) + '€');
    }

    document.querySelector('#showage').innerHTML = userAge + ' anni'
    document.querySelector('#showkm').innerHTML = userKM + ' km'
})

