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
    carouselBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            carouselBtns.forEach(otherBtn => otherBtn.classList.remove("active"));

            // Add "active" class to the clicked button
            btn.classList.add("active");
            lg_poster.setAttribute("src", primaryMovies[btn.dataset.index].img);
            primaryHeading.textContent = primaryMovies[btn.dataset.index].title;
        });
    });




    // let languages = [
    //     { "code": "en", "name": "English" },
    //     { "code": "es", "name": "Spanish" },
    //     { "code": "fr", "name": "French" },
    //     { "code": "de", "name": "German" },
    //     { "code": "it", "name": "Italian" },
    //     { "code": "ja", "name": "Japanese" },
    //     { "code": "ko", "name": "Korean" },
    //     { "code": "zh", "name": "Chinese" },
    //     { "code": "ru", "name": "Russian" },
    //     { "code": "ar", "name": "Arabic" }
    // ];

    // let dropdown = document.querySelector("#language");

    // languages.forEach(function (language) {
    //     let option = document.createElement("option");
    //     option.value = language.code;
    //     option.text = language.name;
    //     dropdown.add(option);
    // });
});