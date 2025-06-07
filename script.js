function openPP(){
    const openBtn = document.getElementById("n-btn1");
    const closeBtn = document.getElementById("closePopup");
    const display2 = document.getElementById("registerPopup");

    openBtn.addEventListener("click", function() {
        display2.style.display = "flex";
    });

    closeBtn.addEventListener("click", function() {
        display2.style.display = "none";
    });

    window.addEventListener("click", function(event) {
        if (event.target === display2) {
            display2.style.display = "none";
        }
    });
}