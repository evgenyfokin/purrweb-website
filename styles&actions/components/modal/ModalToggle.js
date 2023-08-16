const modalToggle = (modalId, toggleButtons, closeButtonId, secondaryCloseButtons) => {
    const modal = document.getElementById(modalId);
    const closeModalBtn = document.getElementById(closeButtonId);
    const hiddenBtn = document.getElementById("hideButton");

    const toggleModalVisibility = (state) => {
        modal.style.display = state;
        hiddenBtn.style.visibility = state === "none" ? "visible" : "hidden";
    }

    const close = (trigger) => {
        trigger.addEventListener("click", () => {
            toggleModalVisibility("none");
        });
    }
    document.querySelectorAll(toggleButtons).forEach(btn => {
        btn.addEventListener("click", () => {
            toggleModalVisibility("block");
        });
    });

    closeModalBtn.addEventListener("click", () => {
        toggleModalVisibility("none")
    })

    if (secondaryCloseButtons) {
        secondaryCloseButtons.forEach(btn => {
            const closeBtn = document.getElementById(btn);
            close(closeBtn)
        })
        // close(secondaryCloseBtn);
    }
}

export default modalToggle;
