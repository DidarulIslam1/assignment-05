// document.getElementById('first-card').addEventListener('click', function (e) {
//     console.log(e.target)
// })
const listContainer = document.getElementById('list-container');

const totalPrice = document.getElementById('total-price');

const discountPrice = document.getElementById('discount-price');

const finalTotal = document.getElementById('final-total');

const applyBtn = document.getElementById('applyBtn');

const couponCode = document.getElementById('couponCode');

const makePurchase = document.getElementById('make-purchase');


applyBtn.addEventListener('click', function () {
    const couponValue = couponCode.value;
    if (couponValue === "SELL200") {
        discountPrice.innerText = (totalPrice.innerText * 0.2).toFixed(2);
    }
    finalTotal.innerText = (totalPrice.innerText - discountPrice.innerText).toFixed(2);
})



const products = document.getElementsByClassName('card');
for (const product of products) {
    product.addEventListener('click', function () {
        const productName = product.querySelector('h2');
        const productPrice = product.querySelector('.price');

        totalPrice.innerText = (parseFloat(productPrice.innerText) + parseFloat(totalPrice.innerText)).toFixed(2);

        if (totalPrice.innerText > 0) {
            makePurchase.removeAttribute('disabled')
        }

        if (totalPrice.innerText >= 200) {
            applyBtn.removeAttribute('disabled')
        }

        finalTotal.innerText = (totalPrice.innerText - discountPrice.innerText).toFixed(2);

        listContainer.innerHTML += `
        <li>${productName.innerText}</li>
        `
    })
}





// .addEventListener('click', function (e) {
//     var priceElement = this.querySelector('#price');
//     var priceText = priceElement.textContent.trim();
//     var priceValue = parseFloat(priceText);
//     console.log(priceValue);
// });
