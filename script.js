document.addEventListener("DOMContentLoaded", () => {
    let languages = [
        { "code": "en", "name": "English" },
        { "code": "es", "name": "Spanish" },
        { "code": "fr", "name": "French" },
        { "code": "de", "name": "German" },
        { "code": "it", "name": "Italian" },
        { "code": "ja", "name": "Japanese" },
        { "code": "ko", "name": "Korean" },
        { "code": "zh", "name": "Chinese" },
        { "code": "ru", "name": "Russian" },
        { "code": "ar", "name": "Arabic" }
    ];

    let dropdown = document.querySelector("#language");

    languages.forEach(function (language) {
        let option = document.createElement("option");
        option.value = language.code;
        option.text = language.name;
        dropdown.add(option);
    });
});