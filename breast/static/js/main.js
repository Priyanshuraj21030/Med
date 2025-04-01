document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    const inputs = form.querySelectorAll('input[type="number"]');

    inputs.forEach(input => {
        input.addEventListener('input', function() {
            if (this.value < 0) {
                this.value = 0;
            }
            this.classList.remove('is-invalid');
        });
    });

    form.addEventListener('submit', function(e) {
        let isValid = true;
        inputs.forEach(input => {
            if (!input.value) {
                isValid = false;
                input.classList.add('is-invalid');
            }
        });

        if (!isValid) {
            e.preventDefault();
            alert('Please fill in all fields with valid numbers.');
        }
    });
}); 