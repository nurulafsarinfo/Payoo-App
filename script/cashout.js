document.getElementById('cashout-btn').addEventListener('click',
    function(event){
        event.preventDefault;
        const pin = document.getElementById('cashout-pin').value ;
        const convertedPin = parseInt(pin);
        console.log("Pin is- ",convertedPin)
        console.log("Pin type- ",typeof convertedPin)
        const amount = document.getElementById('cashout-amount').value;
        const convertedAmount = parseFloat(amount);

        const mainBalance = document.getElementById('main-balance').innerText;
        console.log("Main balance-",mainBalance);
        const convertedMainBalance = parseFloat(mainBalance);
        console.log("converted balance-",convertedMainBalance);

        if(convertedPin === 1234){
            const sum = convertedMainBalance - convertedAmount;
            document.getElementById('main-balance').innerText = sum;
        }else{
            alert("enter valid pin")
        }
    }
)