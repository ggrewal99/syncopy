document.addEventListener("DOMContentLoaded", () => {

    const primaryMovies = {
        0: {
            img: 'assets/img/oppenheimer_lg.jpg',
            title: 'Oppenheimer',
        },
        1: {
            img: 'assets/img/dunkirk_lg.jpg',
            title: 'Dunkirk',
        },
        2: {
            img: 'assets/img/interstellar_lg.jpg',
            title: 'Interstellar',
        }
    };



    const carouselBtns = document.querySelectorAll(".carousel-btn");
    const primaryHeading = document.querySelector(".primary-heading");
    const lg_poster = document.querySelector(".lg-poster-container img");
    const dropdown = document.querySelector("#language");
    carouselBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            carouselBtns.forEach(otherBtn => otherBtn.classList.remove("active"));

            btn.classList.add("active");
            lg_poster.setAttribute("src", primaryMovies[btn.dataset.index].img);
            primaryHeading.textContent = primaryMovies[btn.dataset.index].title;
        });
    });



});