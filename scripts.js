document.addEventListener('DOMContentLoaded', function() {
    const generateBtn = document.getElementById('generate');
    const secretKey = document.getElementById('secret-key');
    const pinInput = document.getElementById('pinToMatch');
    const message = document.getElementById('message');
    const keys = document.querySelectorAll('.key');

    let secret = '';

    function generateSecretKey() {
        secret = Math.floor(100000 + Math.random() * 900000).toString();
        secretKey.textContent = secret;
    }

    generateBtn.addEventListener('click', generateSecretKey);

})