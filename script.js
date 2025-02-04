document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("moreAboutBtn").addEventListener("click", function() {
        let moreAbout = document.getElementById("moreAbout");
        moreAbout.classList.toggle("hidden");
    });
});
