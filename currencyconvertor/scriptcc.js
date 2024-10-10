document.getElementById('convertBtn').addEventListener('click', convertCurrency);

const apiUrl = `https://api.exchangerate-api.com/v4/latest/USD`;

async function convertCurrency() {
    const amount = document.getElementById('amount').value;
    const fromCurrency = document.getElementById('fromCurrency').value;
    const toCurrency = document.getElementById('toCurrency').value;
    
    const response = await fetch(apiUrl);
    const data = await response.json();
    const rate = data.rates[toCurrency] / data.rates[fromCurrency];
    
    const result = amount * rate;
    document.getElementById('result').innerText = `${amount} ${fromCurrency} is equal to ${result.toFixed(2)} ${toCurrency}`;
}

const currencies = ['USD', 'EUR', 'GBP', 'INR', 'JPY']; 
const fromCurrency = document.getElementById('fromCurrency');
const toCurrency = document.getElementById('toCurrency');

currencies.forEach(currency => {
    const option1 = document.createElement('option');
    option1.value = currency;
    option1.innerText = currency;
    fromCurrency.appendChild(option1);

    const option2 = document.createElement('option');
    option2.value = currency;
    option2.innerText = currency;
    toCurrency.appendChild(option2);
});
