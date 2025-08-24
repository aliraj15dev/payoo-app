//* select login button

document.getElementById('login-btn')
.addEventListener('click', function(){
    const validContact = function(contact){
        if(typeof contact !== 'string'){
            return false;
        } else {
            if(contact.length !== 11 || !contact.startsWith('01')){
                return false;
            }
        }
        return true;
    }

    const pin = '2121'
    const userNumber = document.getElementById('num').value
    const userPin = document.getElementById('pin').value

    if(validContact(userNumber) && pin === userPin){
        window.location.href = "home.html"
    } else {
        alert('Give correct info and login')
    }
})
