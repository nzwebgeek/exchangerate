const currencyElement_One = document.getElementById('currency-one');
const currencyElement_Two = document.getElementById('currency-two');

const amountElement_One = document.getElementById('amount-one');
const amountElement_Two = document.getElementById('amount-two');

const rateElement = document.getElementById('rate');
const swap = document.getElementById('swap');

// Fetch exchange rate and update the DOM
function calculate(){
   const currency_One = currencyElement_One.value;
   const currency_Two = currencyElement_Two.value;
   
   fetch(`https://api.exchangerate-api.com/v4/latest/${currency_One}`)
   .then(res => res.json())
   .then(data => {
    const rate = data.rates[currency_Two];
    rateElement.innerText=`1 ${currency_One} = ${rate} ${currency_Two}`;
    amountElement_Two.value = (amountElement_One.value * rate).toFixed(2);
   })
   
}
// Event Listeners
currencyElement_One.addEventListener('change',calculate);
amountElement_One.addEventListener('input',calculate);
currencyElement_Two.addEventListener('change',calculate);
amountElement_Two.addEventListener('input',calculate);

swap.addEventListener('click', () => {
 const temp = currencyElement_One.value;
 currencyElement_One.value=currencyElement_Two.value;
 currencyElement_Two.value=temp;
 calculate();
});

calculate();