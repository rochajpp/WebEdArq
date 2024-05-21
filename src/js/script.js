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