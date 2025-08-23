//! Logout and go to the login page
document.getElementById('login-page').addEventListener('click', function(){
    window.location.href = "index.html"
})

//* button click of the add money section 1️⃣
document.getElementById('add-money').addEventListener('click', function(e){
    e.preventDefault() //! type="button"
    const pin = 2121

    // const bankName = document.getElementById('').value
    const accountNumber = document.getElementById('account-number').value
    const addedMoney = parseInt(document.getElementById('added-money').value)
    const checkPin = parseInt(document.getElementById('user-pin').value)

    if(accountNumber.length !== 11 || checkPin !== pin){
        alert('Something is wrong!⚠️')
        return;
    }

    const balance = parseInt(document.getElementById('balance').innerText)
    const newBalance = balance+addedMoney
    document.getElementById('balance').innerText = newBalance
})

//* button click of the add cashout section 2️⃣
document.getElementById('withdraw').addEventListener('click', function(e){
    e.preventDefault() //! button outside of the form tag
    const pin = 2121

    const agentNumber = document.getElementById('agent-number').value
    const withdrawMoney = parseInt(document.getElementById('cashout').value)
    const checkPin = parseInt(document.getElementById('withdraw-pin').value)

    if(agentNumber.length !== 11 || checkPin !== pin){
        alert('Something is wrong!⚠️')
        return;
    }

    const balance = parseInt(document.getElementById('balance').innerText)
    const newBalance = balance-withdrawMoney
    document.getElementById('balance').innerText = newBalance
})


//* button click of the add transfer money section 3️⃣
document.getElementById('transfer').addEventListener('click', function(e){
    e.preventDefault()
    const pin = 2121

    const othersNumber = document.getElementById('other-account-number').value
    const transferMoney = parseInt(document.getElementById('transfer-money').value)
    const checkPin = parseInt(document.getElementById('transfer-pin').value)

    if(othersNumber.length !== 11 || checkPin !== pin){
        alert('Something is wrong!⚠️')
        return;
    }

    const balance = parseInt(document.getElementById('balance').innerText)
    const newBalance = balance-transferMoney
    document.getElementById('balance').innerText = newBalance
})

//* button click of the get button section 4️⃣
document.getElementById('get-bonus').addEventListener('click', function(e){
    e.preventDefault()
    const getBonus = parseInt(document.getElementById('get-bonus-money').value)

    const balance = parseInt(document.getElementById('balance').innerText)
    document.getElementById('balance').innerText = balance+getBonus
})

//* button click of the pay bill section 5️⃣
document.getElementById('pay-bill').addEventListener('click', function(){
    const pin = 2121

    // const bankName = document.getElementById('').value
    const billAccountNumber = document.getElementById('bill-number').value
    const billAmount = parseInt(document.getElementById('pay-bill-money').value)
    const checkPin = parseInt(document.getElementById('bill-pay-pin').value)

    if(billAccountNumber.length !== 11 || checkPin !== pin){
        alert('Something is wrong!⚠️')
        return;
    }

    const balance = parseInt(document.getElementById('balance').innerText)
    const newBalance = balance-billAmount
    document.getElementById('balance').innerText = newBalance
})


document.getElementById('add-money-card').addEventListener('click', function(){
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

document.getElementById('cashout-card').addEventListener('click', function(){
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

document.getElementById('transfer-money-card').addEventListener('click', function(){
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

document.getElementById('get-bonus-card').addEventListener('click', function(){
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

document.getElementById('pay-bill-card').addEventListener('click', function(){
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

document.getElementById('transactions-card').addEventListener('click', function(){
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