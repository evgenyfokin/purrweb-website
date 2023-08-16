const ValidateForm = () => {
    const form = document.getElementById("form");
    const requiredInputs = form.querySelectorAll('input[required]');
    const closeModalBtn = document.getElementById("closeModal1");
    const submitBtn = form.querySelector('.modal__content-form-button');
    const modal = document.getElementById('modal1');
    const modalSuccess = document.getElementById('modal2');

    let allValid = true;

    const cleanFields = () => {
        form.querySelectorAll('.error-message').forEach(el => el.remove());
        form.querySelectorAll('.main-error-message').forEach(el => el.remove());
        requiredInputs.forEach(input => {
            input.style.borderColor = ''
        })
    };

    const openSuccessModal = () => {
        modalSuccess.style.display = 'block';
    };

    const closeCurrentModal = () => {
        modal.style.display = 'none';
    };

    const superButton = document.getElementById("superButton")
    superButton.addEventListener("click", () => {
        modalSuccess.style.display = 'none'
    })

    submitBtn.addEventListener("click", event => {
        event.preventDefault();
        allValid = true;
        cleanFields();

        requiredInputs.forEach(input => {
            if (!input.value.trim()) {
                allValid = false;
                const errorMessage = document.createElement('div');
                errorMessage.className = 'error-message';
                input.style.borderColor = "#EC1211";
                errorMessage.textContent = "This field is required";
                input.parentNode.insertBefore(errorMessage, input.nextSibling);
            }
        });

        const terms = form.querySelector('.modal__content-form-terms');
        if (!allValid && !form.querySelector('.main-error-message')) {
            const mainErrorMessage = document.createElement('div');
            mainErrorMessage.className = "main-error-message";
            mainErrorMessage.textContent = "Please fill in all required fields";
            terms.parentNode.insertBefore(mainErrorMessage, terms);
        }

        if (allValid) {
            closeCurrentModal();
            openSuccessModal();
            requiredInputs.forEach(input => {
                input.value = ''
            })
        }
    });

    closeModalBtn.addEventListener("click", cleanFields);

    return allValid;
};

export default ValidateForm;
