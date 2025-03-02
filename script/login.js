// alert()

document.getElementById('login-btn').addEventListener('click', 
    function(event){
        event.preventDefault();

        const accountNumber = document.getElementById('account-number').value ;
        console.log(accountNumber);

        const pin = document.getElementById('account-pin').value;
        const convertPin = parseInt(pin);
        console.log(pin);
        console.log(accountNumber.length);

//         if(accountNumber.length === 11){
//             console.log("Number Thats okay")
//             if(pin === '1234'){
//                 window.location.href = "./main.html";
//             }else{
//                 console.log("pin thik nai");
//             }
//         }
//         else{
//             // console.log("need valid account number")
            
//         }
// })

        if(accountNumber.length === 11){
            if(convertPin === 1234){
               window.location.href = "main.html";
            }
            else{
                alert("Pin is not valid");
            }
        }
        else{
            alert("Account number is not correct");
        }
    
})