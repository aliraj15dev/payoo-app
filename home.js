const pin = 2121;
const transactionData = []

//! Logout and go to the login page
document.getElementById('login-page').addEventListener('click', function(){
    window.location.href = "index.html"
})
//* reusable code
function getValue(id){
    const addedMoney = parseInt(document.getElementById(id).value)
    return addedMoney;
}

function balance(id){
    const balance = parseInt(document.getElementById(id).innerText)
    return balance;
}
function myBalance(value){
    const balance = document.getElementById('balance')
    balance.innerText =  value
}

//* button click of the add money section 1️⃣
document.getElementById('add-money').addEventListener('click', function(e){
    e.preventDefault() //! type="button"

    // const bankName = document.getElementById('').value
    const accountNumber = document.getElementById('account-number').value
    // const addedMoney = parseInt(document.getElementById('added-money').value)
    const availableBalance = balance('balance')
    const addedMoney = getValue('added-money')

    if(addedMoney<=0){
        alert("money must greater than 0")
        console.log('dfhjfg')
        // return;
    }
    const checkPin = parseInt(document.getElementById('user-pin').value)

    if(accountNumber.length !== 11 || checkPin !== pin){
        alert('Number or pin is incorrect!⚠️')
        return;
    }

    // const balance = parseInt(document.getElementById('balance').innerText)
    const newBalance = availableBalance+addedMoney
    // document.getElementById('balance').innerText = newBalance
    myBalance(newBalance)
    const data = {name : "Add Money", date : new Date().toLocaleTimeString() }
    transactionData.unshift(data)
})

//* button click of the cashout section 2️⃣
document.getElementById('withdraw').addEventListener('click', function(e){
    e.preventDefault() //! button outside of the form tag

    const agentNumber = document.getElementById('agent-number').value
    const availableBalance = balance('balance')
    const withdrawMoney = getValue('cashout')

    const checkPin = parseInt(document.getElementById('withdraw-pin').value)

    if(agentNumber.length !== 11 || checkPin !== pin){
        alert('Number or pin is incorrect!⚠️')
        return;
    }

    if(withdrawMoney>availableBalance){
        alert("Not Available Balance")
        return;
    }

    const newBalance = availableBalance-withdrawMoney
    myBalance(newBalance)
    const data = {name : "Cash Out", date : new Date().toLocaleTimeString() }
    transactionData.unshift(data)
})


//* button click of the transfer money section 3️⃣
document.getElementById('transfer').addEventListener('click', function(e){
    e.preventDefault()

    const othersNumber = document.getElementById('other-account-number').value
    const availableBalance = balance('balance')
    const transferMoney = parseInt(document.getElementById('transfer-money').value)
    const checkPin = parseInt(document.getElementById('transfer-pin').value)

    if(transferMoney>availableBalance){
        alert("Not Available Balance")
        return;
    }

    if(othersNumber.length !== 11 || checkPin !== pin){
        alert('Number or pin is incorrect!⚠️')
        return;
    }

    const newBalance = availableBalance-transferMoney
    myBalance(newBalance)
    const data = {name : "Transfer Money", date : new Date().toLocaleTimeString() }
    transactionData.unshift(data)
})

//* button click of the get button section 4️⃣
document.getElementById('get-bonus').addEventListener('click', function(e){
    e.preventDefault()
    const getBonus = parseInt(document.getElementById('get-bonus-money').value)
    if(getBonus<=0){
        alert("Coupon must greater than 0")
        return;
    }

    document.getElementById('balance').innerText = balance('balance')+getBonus
    const data = {name : "Get Bonus", date : new Date().toLocaleTimeString() }
    transactionData.unshift(data)
})

//* button click of the pay bill section 5️⃣
document.getElementById('pay-bill').addEventListener('click', function(){
    // const bankName = document.getElementById('').value
    const billAccountNumber = document.getElementById('bill-number').value
    const availableBalance = balance('balance')
    const billAmount = parseInt(document.getElementById('pay-bill-money').value)
    const checkPin = parseInt(document.getElementById('bill-pay-pin').value)

    if(billAmount>availableBalance){
        alert("Not Available Balance")
        return;
    }

    if(billAccountNumber.length !== 11 || checkPin !== pin){
        alert('Number or pin is incorrect!⚠️')
        return;
    }

    const newBalance = availableBalance-billAmount
    myBalance(newBalance)
    const data = {name : "Pay Bill", date : new Date().toLocaleTimeString() }
    transactionData.unshift(data)
})

//? reusable code
function displayNone(id){
    const cardSections = document.getElementsByClassName('card-section')
    for(let cardSection of cardSections){
        cardSection.style.display = "none"
    }
    document.getElementById(id).style.display = "block"
}
//? changes after card click
function selectedCard(id){
    const selectedCards = document.getElementsByClassName('selected-card')
    for(let selectedCard of selectedCards){
    selectedCard.classList.remove('border-blue-600', 'bg-gray-200')
    selectedCard.classList.add('border-gray-400')
    }
    document.getElementById(id).classList.remove('border-gray-400')
    document.getElementById(id).classList.add('border-blue-600', 'bg-gray-200')
}

//todo click on the card
document.getElementById('add-money-card').addEventListener('click', function(){
    // const history = document.getElementById('history')
    // history.style.display = "none"
    // const addMoney = document.getElementById('add-money-section')
    // addMoney.style.display = "block"
    // const cashOut = document.getElementById('cashout-section')
    // cashOut.style.display = "none"
    // const transferMoney = document.getElementById('transfer-money-section')
    // transferMoney.style.display = "none"
    // const getBonus = document.getElementById('get-bonus-section')
    // getBonus.style.display = "none"
    // const payBill = document.getElementById('pay-bill-section')
    // payBill.style.display = "none"
    // const transactions = document.getElementById('transactions-section')
    // transactions.style.display = "none"
    displayNone('add-money-section')
    selectedCard("add-money-card")
})

document.getElementById('cashout-card').addEventListener('click', function(){
    displayNone('cashout-section')
    selectedCard("cashout-card")
})

document.getElementById('transfer-money-card').addEventListener('click', function(){
    displayNone('transfer-money-section')
    selectedCard("transfer-money-card")
})

document.getElementById('get-bonus-card').addEventListener('click', function(){
    displayNone('get-bonus-section')
    selectedCard("get-bonus-card")
})

document.getElementById('pay-bill-card').addEventListener('click', function(){
    displayNone('pay-bill-section')
    selectedCard("pay-bill-card")
})

document.getElementById('transactions-card').addEventListener('click', function(){
    displayNone('transactions-section')
    // const selectedCards = document.getElementsByClassName('selected-card')
    // for(let selectedCard of selectedCards){
    // selectedCard.classList.remove('border-blue-600', 'bg-gray-200')
    // selectedCard.classList.add('border-gray-400')
    // }
    // document.getElementById('transactions-card').classList.remove('border-gray-400')
    // document.getElementById('transactions-card').classList.add('border-blue-600', 'bg-gray-200')
    selectedCard("transactions-card")

    const transactionsContainer = document.getElementById('transactions-container')
    transactionsContainer.innerText = ""

    for(const transaction of transactionData){
        const div = document.createElement("div")
        div.innerHTML = `
            <div class="flex justify-between items-center bg-white p-5 rounded-xl mt-5">
                <div class="flex items-center gap-1">
                    <div class="bg-gray-200 p-3 rounded-full">
                        <img src="assets/wallet1.png" alt="" />
                    </div>
                    <div>
                        <h3>${transaction.name}</h3>
                        <p>${transaction.date}</p>
                    </div>
                </div>
            <div><i class="fa-solid fa-ellipsis-vertical"></i></div>
          </div>
        `
        transactionsContainer.appendChild(div)
    }
})