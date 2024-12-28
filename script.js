const emailInput = document.getElementById('email');
const emailTooltip = document.getElementById('email-tooltip');

emailInput.addEventListener('input', () => {
    if (!emailInput.value.includes('@')) {
        emailTooltip.style.display = 'block';
    } else {
        emailTooltip.style.display = 'none';
    }
});


