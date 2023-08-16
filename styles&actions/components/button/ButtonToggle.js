const buttonToggleActive = () => {
    let buttons = document.querySelectorAll('.header__above-button')

    buttons.forEach(button => {
        button.addEventListener('click', function() {
            buttons.forEach(btn => btn.classList.remove('header__above-button_active'));
            this.classList.add('header__above-button_active');
        });
    });
}

export default buttonToggleActive;