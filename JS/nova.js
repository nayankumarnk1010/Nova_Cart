let searchBtn = document.getElementById("searchBtn");
let searchBox = document.getElementById("searchBox");

searchBtn.addEventListener("click", () => {
    searchBox.classList.toggle("active");
});