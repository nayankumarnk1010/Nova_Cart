window.addEventListener("DOMContentLoaded", () => {

    const searchBtn = document.getElementById("searchBtn");
    const searchBox = document.getElementById("searchBox");

    searchBtn.addEventListener("click", () => {
        searchBox.classList.toggle("active");
    });

});