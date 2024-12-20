function makeHappy(amount) {
    let message = '';
    if (amount === 1) {
        message = 'Thank you!';
    } else if (amount === 10) {
        message = 'Love you! Thank you a lot!';
    } else if (amount === 50) {
        message = 'You make me so happy!';
    }
    alert(message);
    document.getElementById('happySound').play();
}
