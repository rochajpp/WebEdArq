const body = document.querySelector("body");

function activeMenu(){
    const body = document.querySelector("body");
    body.classList.toggle("menu-on");
}


const aHeader = document.querySelectorAll(".navigation-header a");

for(var i = 0; i < aHeader.length; i++){
    aHeader[i].onclick = () => {
        body.classList.remove("menu-on");
    }
}

const header = document.querySelector("header");
function activeHeader(){
    header.classList.toggle("activeHeader", scrollY > 0);
}

document.addEventListener("scroll", activeHeader);