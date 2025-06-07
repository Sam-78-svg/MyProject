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
const link=document.getElementById("resLink");
link.addEventListener("click", function(event) {
    const closeBtn = document.getElementById("closePopup");
    const display2 = document.getElementById("registerPopup");

    display2.style.display = "flex";
    
    closeBtn.addEventListener("click", function() {
        display2.style.display = "none";
    });

    const display = document.getElementById("login-form");
    display.style.display="none";

    window.addEventListener("click", function(event) {
        if (event.target === display2) {
            display2.style.display = "none";
        }
    });
});




function openLogin(){
    const openBtn1 = document.getElementById("n-btn2");
    const closeBtn = document.getElementById("closePopup2");
    const display = document.getElementById("login-form");

    openBtn1.addEventListener("click", function() {
        display.style.display = "flex";
    });

    closeBtn.addEventListener("click", function() {
        display.style.display = "none";
    });

    window.addEventListener("click", function(event) {
        if (event.target === display) {
            display.style.display = "none";
        }
    });
}