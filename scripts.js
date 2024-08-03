document.addEventListener('DOMContentLoaded', function() {
    const generateBtn = document.getElementById('generate');
    const secretKey = document.getElementById('secret-key');
    const pinInput = document.getElementById('pinToMatch');
    const notification = document.getElementById('notification');
    const keys = document.querySelectorAll('.key');

    let secret = '';

    function generateSecretKey() {
        secret = Math.floor(100000 + Math.random() * 900000).toString();
        secretKey.textContent = secret;
    }

    function clearInput() {
        pinInput.value = '';
    }

    function comparePin() {

        if (pinInput.value === secret) {
            notification.textContent = 'SUCCESS! YOU ARE AWESOME!!';
            notification.style.color = '#6cc788';
        } else {
            notification.textContent = 'SORRY! TRY AGAIN!!';
            notification.style.color = '#f44455';
        }
    }

    generateBtn.addEventListener('click', generateSecretKey);

    pinInput.addEventListener('input', function() {
        // Ensure the value is a string and limit to 6 digits
        pinInput.value = pinInput.value.substring(0, 6);        
    });

    keys.forEach(key => {
        key.addEventListener('click', function() {
            if (this.id === 'clear') {
                // on click clear button
                clearInput();
            } else if (this.id === 'submit') {
                //on click submit button 
                comparePin();
            } else {
                // show number
                const newValue = pinInput.value + this.getAttribute('data-value');
                pinInput.value = newValue.substring(0, 6);
            }
        });
    });

})