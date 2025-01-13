document.addEventListener("DOMContentLoaded", function () {
    const name = "Paul Frank";
    const currentYear = new Date().getFullYear();
    document.getElementById("year").textContent = `${name}, ${currentYear}`;
});
