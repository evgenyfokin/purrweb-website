$(document).ready(function () {
    function displayError(inputElement, message) {
        $(inputElement).next('.error-message').remove();
        const errorMessage = $('<div>').addClass('error-message').text(message);
        $(inputElement).after(errorMessage);
    }

    $("#inputPhone").inputmask({
        mask: "+7 999 999 99 99",
        placeholder: " ",
        clearIncomplete: true,
        oncomplete: function () {
            var validCodes = ["495", "499", "812", "383", "343", "843", "831", "351", "8182", "4722", "4852"];
            var enteredCode = $(this).val().split(' ')[1];
            if (validCodes.includes(enteredCode)) {
                console.log('Valid phone number');
                $(this).next('.error-message').remove();
            } else {
                displayError(this, 'Invalid city/operator code!');
                $(this).val("");
            }
        },
        onincomplete: function () {
            displayError(this, 'Please enter the full number');
        }
    });
});