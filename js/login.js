(() => {
    const init = document.getElementById("initSesion");
    const section1 = document.getElementById("sectionForm");
    const section2 = document.getElementById("sectionForm2");
    const txtRegister = document.getElementById("textRegister");
    const txtLogin = document.getElementById("textLogin");

    
    init.addEventListener("click", () => {
        section1.classList.add("d-none")
        section2.classList.remove("d-none")
        txtRegister.classList.add("d-none")
        txtLogin.classList.remove("d-none")
        document.getElementById("loginUser").classList.add("d-none");
        document.getElementById("checkInUser").classList.remove("d-none");

    });

    const checkIn = document.getElementById("checkInButton");

    checkIn.addEventListener("click", () => {
        section2.classList.add("d-none")
        section1.classList.remove("d-none")
        txtLogin.classList.add("d-none")
        txtRegister.classList.remove("d-none")

        document.getElementById("checkInUser").classList.add("d-none");
        document.getElementById("loginUser").classList.remove("d-none");
    });
})();
