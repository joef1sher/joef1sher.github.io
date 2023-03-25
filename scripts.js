document.addEventListener("DOMContentLoaded", function() {
    const moreInfoButton = document.querySelector(".more-info");
    const getStartedButton = document.querySelector(".get-started");

    moreInfoButton.addEventListener("click", function() {
        alert("More Info clicked!");
    });

    getStartedButton.addEventListener("click", function() {
        alert("Get Started clicked!");
    });
});
