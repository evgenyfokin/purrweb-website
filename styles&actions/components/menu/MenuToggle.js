const menuToggle = () =>{
    const menu =document.getElementById("menu")
    const openMenuBtn = document.getElementById("openMenu")
    const closeMenuBtn = document.getElementById("closeMenu")
    const modalBtn = document.getElementById("modalFromMenu")
    openMenuBtn.addEventListener("click", ()=> {
        menu.style.display = "flex"
        document.body.style.overflow = 'hidden'
    })
    const closeMenu = (trigger) => {
        return trigger.addEventListener("click", () => {
            menu.style.display = "none"
            document.body.style.overflow = ''
        })
    }
    closeMenu(closeMenuBtn)
    closeMenu(modalBtn)
}

export default menuToggle