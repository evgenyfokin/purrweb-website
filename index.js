import ButtonToggleActive from "./styles&actions/components/button/ButtonToggle.js";
import MenuToggle from "./styles&actions/components/menu/MenuToggle.js";
import ModalToggle from "./styles&actions/components/modal/ModalToggle.js";
import ValidateForm from "./styles&actions/components/modal/ValidateForm.js";

document.addEventListener("DOMContentLoaded", () => {
    ButtonToggleActive();
});

MenuToggle()
ModalToggle("modal1", ".contactSales", "closeModal1",
    null)
ValidateForm()
ModalToggle("modal2", null, "closeModal2", ["superButton"])
ModalToggle("cookie", null, "closeCookie", ["acceptCookie", "declineCookie"])
