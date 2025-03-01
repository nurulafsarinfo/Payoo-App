document.getElementById('add-money').addEventListener('click', 
    function(event){
        event.preventDefault();
        console.log('hewllowlskdf')
        const amount = document.getElementById('amount').value;

        const convertedAmount = parseFloat(amount);
        
        const pin = document.getElementById('account-pin').value;
        const convertedPin = parseInt(pin);

        const mainBalance = document.getElementById('main-balance').innerText;
        const convertedMainBalance = parseFloat(mainBalance);
        console.log(typeof convertedMainBalance)


        if(convertedPin === 1234){
            const sum = convertedMainBalance + convertedAmount;
            console.log(sum);
            document.getElementById('main-balance').innerText = sum;

        }else{
            console.log("pin sothik nah");
        }

    }
)