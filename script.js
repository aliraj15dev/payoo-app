//* select login button

document.getElementById('login-btn')
.addEventListener('click', function(){
    //function(e) thakle e.preventDefault() == without type="button"
    const mobileNumber = '01518989082'
    const pin = '2121'
    const userNumber = document.getElementById('num').value
    // const convertedNumber = parseInt(userNumber)
    const userPin = document.getElementById('pin').value
    if(mobileNumber===userNumber && pin===userPin){
        window.location.href="home.html"
    } else{
        alert('Give correct info and login')
    }
})


document.getElementById('add-money')
.addEventListener('click', function(){
    console.log('successful')
})