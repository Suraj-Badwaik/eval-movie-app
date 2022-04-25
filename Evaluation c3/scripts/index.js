// Store the wallet amount to your local storage with key "amount"


let bag= JSON.parse(localStorage.getItem('amount'));
function addTowallet(){
    let amount = document.getElementById('amount').value;
    
    bag += +amount;
    
    document.getElementById('wallet').innerText = bag;
    localStorage.setItem('amount',JSON.stringify(bag));
}
