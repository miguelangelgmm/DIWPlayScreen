let progressbar;


(() => {
    const forms = document.querySelectorAll(".needs-validation");
    let password = document.getElementById("idPassword");
    let  password2 = document.getElementById("idPassword2");
    const modal = new bootstrap.Modal(document.getElementById("staticBackdrop"));
    Array.from(forms).forEach((form) => {
        form.addEventListener(
            "submit",
            (event) => {
                if (!form.checkValidity()) {
                    event.preventDefault();
                    event.stopPropagation();
                } 

                if(form.name != "form2" && (form.checkValidity() && password.value != password2.value)){
                    modal.show();
                    password.value ="";
                    password2.value="";
                    event.preventDefault();
                    event.stopPropagation();
                }
                
                form.classList.add("was-validated");

            },
            false
        );
    });
})();

(() => {
    let value = 0;
    let formulario = document.querySelector("#formulary");
    let inputs = formulario.querySelectorAll("input[required]");
    let progressBar = document.getElementById("progressBar");
    let inputCheck = [];

     // Agregar los inputs que ya cumplen con la validación al inicio
    inputs.forEach((input) => {
        if (input.checkValidity()) {
            inputCheck.push(input.name);
            value += 15;
        }
    });
    inputs.forEach((input) => {
        input.addEventListener("change", (event) => {
            if (input.checkValidity() && !inputCheck.includes(input.name)) {
                value = value + 15 < 100 ? value + 15 : 1000;

                progressBar.style.width = value + "%";
                progressBar.innerHTML = value + "%";
                inputCheck.push(input.name);
            }
            if (!input.checkValidity() && inputCheck.includes(input.name)) {
                let indice = inputCheck.indexOf(input.name);
                inputCheck.splice(indice, 1);

                value = value - 15 < 0 ? value - 15 : 0;
                progressBar.style.width = value + "%";
                progressBar.innerHTML = value + "%";
            }
            
        });
    });

})();
