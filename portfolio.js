
let tablinks = document.getElementsByClassName("tab-links");
let tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname){
    for(let i of tablinks){
        i.classList.remove("active-link");
    }
    for(let i of tabcontents){
        i.classList.remove("active-tab");
    }
    // for(let i = 0; i < tabcontents.length; i++){
    //     tabcontents[i].classList.remove("active-tab");
    // }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}


let side = document.getElementById("sidemenu");


function openmenu(){

    side.style.right = "0";

}

function closemenu(){
    
    side.style.right = "-200px";

}

let typed = new Typed(".auto-input",{
    strings : [" Frontend Developer"," Java Backend Developer","Coder","Programmer"],
    typeSpeed : 100,
    backSpeed :100,
    loop : true
})


