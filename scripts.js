
modal = () => {
    document.addEventListener("click", function (e){
        if(e.target.classList.contains("gallery-item")) {
            const src = e.target.getAttribute("src");
            document.querySelector(".modal-img").src = src;
            const myModal = new bootstrap.Modal(document.getElementById('gallery-modal'));
            myModal.show();
        }
    });
};


load = () => {
    var loader = document.getElementById("preloader");
    window.addEventListener("load", function() {
        loader.style.display = "none";
    })
}

nav = () => {
    const navSlide = () => {
        const burger = document.querySelector('.burger');
        const nav = document.querySelector('.nav-links');
    
        burger.addEventListener('click', () => {
            nav.classList.toggle('nav-active');
            console.log("Clicked on the burger");
        });
    }
}

cursor = () => {
    var cursor = document.getElementById("cursor");

    document.onmousemove = function(e) {
        cursor.style.left = (e.pageX - 25) + "px";
        cursor.style.top = (e.pageY - 25) + "px";
        cursor.style.display = "block";
    }
}


modal();

load();

navSlide();

cursor();






