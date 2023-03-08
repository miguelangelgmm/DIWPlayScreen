let checkL = document.getElementById("checkL");

checkL.addEventListener('click',idioma);

function idioma (){
    let id = checkL.checked;

    if(id){
        location.href = "./indexIngles.html";
    }else{
        location.href = "./index.html";
    }
}

let stylesCSS = document.getElementById("stylesCSS");
let checkCSS = document.getElementById("checkCSS")

checkCSS.addEventListener('click',estilo);


function estilo (){
    let id = checkCSS.checked;

    if(id){
        stylesCSS.href = "./style/style2.css";
    }else{
        stylesCSS.href = "./style/style.css";
    }
}