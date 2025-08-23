//! Logout and go to login page
document.getElementById('login-page')
    .addEventListener('click', function(){
    window.location.href = "index.html"
})

//* add money
document.getElementById('add-money').addEventListener('click', function(e){
    e.preventDefault()
    const addMoney = parseInt(document.getElementById('added-money').value)
    const balance = parseInt(document.getElementById('balance').innerText)

    const newBalance = balance+addMoney
    document.getElementById('balance').innerText = newBalance
})

//* cashout
document.getElementById('withdraw').addEventListener('click', function(e){
    e.preventDefault()
    const addMoney = parseInt(document.getElementById('cashout').value)
    const balance = parseInt(document.getElementById('balance').innerText)

    const newBalance = balance-addMoney
    document.getElementById('balance').innerText = newBalance
})

//* transfer money
document.getElementById('transfer').addEventListener('click', function(e){
    e.preventDefault()
    const addMoney = parseInt(document.getElementById('transfer-money').value)
    const balance = parseInt(document.getElementById('balance').innerText)

    const newBalance = balance-addMoney
    document.getElementById('balance').innerText = newBalance
})

//* get bonus
document.getElementById('get-bonus').addEventListener('click', function(e){
    e.preventDefault()
    const addMoney = parseInt(document.getElementById('get-bonus-money').value)
    const balance = parseInt(document.getElementById('balance').innerText)

    const newBalance = balance+addMoney
    document.getElementById('balance').innerText = newBalance
})

//* pay bill
document.getElementById('pay-bill').addEventListener('click', function(e){
    e.preventDefault()
    const addMoney = parseInt(document.getElementById('pay-bill-money').value)
    const balance = parseInt(document.getElementById('balance').innerText)

    const newBalance = balance-addMoney
    document.getElementById('balance').innerText = newBalance
})


document.getElementById('add-money-card')
.addEventListener('click', function(){
    const history = document.getElementById('history')
    history.style.display = "none"
    const addMoney = document.getElementById('add-money-section')
    addMoney.style.display = "block"
    const cashOut = document.getElementById('cashout-section')
    cashOut.style.display = "none"
    const transferMoney = document.getElementById('transfer-money-section')
    transferMoney.style.display = "none"
    const getBonus = document.getElementById('get-bonus-section')
    getBonus.style.display = "none"
    const payBill = document.getElementById('pay-bill-section')
    payBill.style.display = "none"
    const transactions = document.getElementById('transactions-section')
    transactions.style.display = "none"
})

document.getElementById('cashout-card')
.addEventListener('click', function(){
    const history = document.getElementById('history')
    history.style.display = "none"
    const addMoney = document.getElementById('add-money-section')
    addMoney.style.display = "none"
    const cashOut = document.getElementById('cashout-section')
    cashOut.style.display = "block"
    const transferMoney = document.getElementById('transfer-money-section')
    transferMoney.style.display = "none"
    const getBonus = document.getElementById('get-bonus-section')
    getBonus.style.display = "none"
    const payBill = document.getElementById('pay-bill-section')
    payBill.style.display = "none"
    const transactions = document.getElementById('transactions-section')
    transactions.style.display = "none"
})

document.getElementById('transfer-money-card')
.addEventListener('click', function(){
    const history = document.getElementById('history')
    history.style.display = "none"
    const addMoney = document.getElementById('add-money-section')
    addMoney.style.display = "none"
    const cashOut = document.getElementById('cashout-section')
    cashOut.style.display = "none"
    const transferMoney = document.getElementById('transfer-money-section')
    transferMoney.style.display = "block"
    const getBonus = document.getElementById('get-bonus-section')
    getBonus.style.display = "none"
    const payBill = document.getElementById('pay-bill-section')
    payBill.style.display = "none"
    const transactions = document.getElementById('transactions-section')
    transactions.style.display = "none"
})

document.getElementById('get-bonus-card')
.addEventListener('click', function(){
    const history = document.getElementById('history')
    history.style.display = "none"
    const addMoney = document.getElementById('add-money-section')
    addMoney.style.display = "none"
    const cashOut = document.getElementById('cashout-section')
    cashOut.style.display = "none"
    const transferMoney = document.getElementById('transfer-money-section')
    transferMoney.style.display = "none"
    const getBonus = document.getElementById('get-bonus-section')
    getBonus.style.display = "block"
    const payBill = document.getElementById('pay-bill-section')
    payBill.style.display = "none"
    const transactions = document.getElementById('transactions-section')
    transactions.style.display = "none"
})

document.getElementById('pay-bill-card')
.addEventListener('click', function(){
    const history = document.getElementById('history')
    history.style.display = "none"
    const addMoney = document.getElementById('add-money-section')
    addMoney.style.display = "none"
    const cashOut = document.getElementById('cashout-section')
    cashOut.style.display = "none"
    const transferMoney = document.getElementById('transfer-money-section')
    transferMoney.style.display = "none"
    const getBonus = document.getElementById('get-bonus-section')
    getBonus.style.display = "none"
    const payBill = document.getElementById('pay-bill-section')
    payBill.style.display = "block"
    const transactions = document.getElementById('transactions-section')
    transactions.style.display = "none"
})

document.getElementById('transactions-card')
.addEventListener('click', function(){
    const history = document.getElementById('history')
    history.style.display = "none"
    const addMoney = document.getElementById('add-money-section')
    addMoney.style.display = "none"
    const cashOut = document.getElementById('cashout-section')
    cashOut.style.display = "none"
    const transferMoney = document.getElementById('transfer-money-section')
    transferMoney.style.display = "none"
    const getBonus = document.getElementById('get-bonus-section')
    getBonus.style.display = "none"
    const payBill = document.getElementById('pay-bill-section')
    payBill.style.display = "none"
    const transactions = document.getElementById('transactions-section')
    transactions.style.display = "block"
})