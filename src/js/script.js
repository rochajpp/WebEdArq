const url = window.location.href;
const redirectEmail = document.querySelector("#redirect");
redirectEmail.value = url;

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



const boxProjects = document.querySelectorAll('.box-project');

boxProjects.forEach(boxProject => {
    const images = boxProject.querySelectorAll('.project-image');
    const prevButton = boxProject.querySelector('.left');
    const nextButton = boxProject.querySelector('.right');

    let currentIndex = 0;

    function updateSlide(index) {
        images.forEach((img, i) => {
            img.classList.remove('active');
            if (i === index) {
                img.classList.add('active');
            }
        });
    }

    if (images.length > 1) {
        prevButton.addEventListener('click', () => {
            currentIndex = (currentIndex === 0) ? images.length - 1 : currentIndex - 1;
            updateSlide(currentIndex);
        });

        nextButton.addEventListener('click', () => {
            currentIndex = (currentIndex === images.length - 1) ? 0 : currentIndex + 1;
            updateSlide(currentIndex);
        });

        // Initialize the first slide
        updateSlide(currentIndex);
    } else {
        prevButton.style.display = 'none';
        nextButton.style.display = 'none';
    }
});


function openProject(index){
    const body = document.querySelector("body");
    
    const img = document.querySelector(".image-project-plus");
    const title = document.querySelector(".title-desc-plus");
    const p = document.querySelector(".p-desc-plus");
    const a = document.querySelector(".a-desc-plus");

    switch(index){
        case 1:
            body.classList.toggle("open-project")
            img.src = "src/img/casa04-1.jpg";
            title.innerHTML = "Casa 04";
            p.innerHTML = "Algumas imagens desse estudo residencial que muito me orgulha por ser uma casa que me gera uma sensação de conforto e paz."
            a.href = "https://www.instagram.com/p/C2eyA2ou5An/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==";
            break;
        case 2:
            body.classList.toggle("open-project")
            img.src = "src/img/casa3-1.jpg";
            title.innerHTML = "Casa 03";
            p.innerHTML = "Estudo de projeto residencial. Terreno apertado e simples, conseguimos desenvolver esse estudo muito elegante."
            a.href = "https://www.instagram.com/p/C15fKA-LK3Z/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==";
            break;
        case 3:
            body.classList.toggle("open-project")
            img.src = "src/img/EntreJanelas.jpg";
            title.innerHTML = "Entre Janelas";
            p.innerHTML = "É com muita honra e felicidade que apresento o novo espacinho das meninas do @entrejanelaspsi , esse estudo de projeto que tive o prazer de criar.Nosso partido surgiu da palavra “ACOLHIMENTO”, buscando sempre trazer uma sensação de colo em cada ambiente, para que quem usufrua do espaço se sinta confortável e acolhido."
            a.href = "https://www.instagram.com/reel/C4qFcf6L0ue/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==";
            break;
        case 4:
            body.classList.toggle("open-project")
            img.src = "src/img/Casa.jpg";
            title.innerHTML = "Casa";
            p.innerHTML = "Depois de um tempo sem postar, estamos de volta, e dessa vez com essa casa muito aconchegante. Segujndo um traço mais norte americano, com uma jardim frontal e essa fachada típica. O que acharam?"
            a.href = "https://www.instagram.com/p/C3FvkXPuiZ9/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==";
            break;

        default:
            body.classList.toggle("open-project");
            break;
    }
}
