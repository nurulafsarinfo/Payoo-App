document.getElementById('add-money').addEventListener('click', 
    function(event){
        event.preventDefault();

        // take Account Number 
        const accountNumber = document.getElementById('account-number').value;
        console.log("Account num- ",accountNumber);

        // take amount 
        const amount = document.getElementById('amount').value;
        const convertedAmount = parseFloat(amount);
        console.log("Amount- ",convertedAmount);
    
        // take pin 
        const pin = document.getElementById('account-pin').value;
        const convertedPin = parseInt(pin);
        console.log("Pin is- ",convertedPin);

        // take Main Balance 
        const mainBalance = document.getElementById('main-balance').innerText;
        const convertedMainBalance = parseFloat(mainBalance);
        console.log(typeof convertedMainBalance)


        // if(convertedPin === 1234){
        //     const sum = convertedMainBalance + convertedAmount;
        //     console.log(sum);
        //     document.getElementById('main-balance').innerText = sum;

        // }else{
        //     console.log("pin sothik nah");
        // }

       if(accountNumber.length === 11){
            if(convertedPin === 1234){
                const sum = convertedMainBalance + convertedAmount;
                document.getElementById('main-balance').innerText = sum;

            }
       }
       else{
        alert("Account number is not correct!")
       }

    }
)