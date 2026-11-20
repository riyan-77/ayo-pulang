
// ==========================================
// JAM DIGITAL REAL-TIME
// ==========================================

function updateClock() {
    const now = new Date();

    const time = now.toLocaleTimeString("id-ID", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false
    });

    const clock = document.getElementById("digital-clock");

    if (clock) {
        clock.textContent = time;
    }
}

// Jalankan jam digital
updateClock();
setInterval(updateClock, 1000);


// ==========================================
// MEMBUKA CUSTOM POPUP PRANK
// ==========================================

function showHomeMessage() {
    const popup = document.getElementById("prankPopup");

    if (popup) {
        popup.hidden = false;

        // Mencegah halaman bergulir saat popup terbuka
        document.body.style.overflow = "hidden";
    }
}


// ==========================================
// MENUTUP CUSTOM POPUP
// ==========================================

function closeHomeMessage() {
    const popup = document.getElementById("prankPopup");

    if (popup) {
        popup.hidden = true;

        // Mengembalikan scroll halaman
        document.body.style.overflow = "";
    }
}


// ==========================================
// MENUTUP POPUP KETIKA KLIK AREA LUAR
// ==========================================

document.addEventListener("click", function(event) {

    const popup = document.getElementById("prankPopup");

    if (popup && event.target === popup) {
        closeHomeMessage();
    }

});


// ==========================================
// MENUTUP POPUP MENGGUNAKAN TOMBOL ESC
// ==========================================

document.addEventListener("keydown", function(event) {

    if (event.key === "Escape") {
        closeHomeMessage();
    }

});
