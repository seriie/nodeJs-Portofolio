document.addEventListener('DOMContentLoaded', function() {
    const cursor = document.querySelector(".cursorCustom");

    document.body.style.cursor = 'none';
    const colors = [
        'rgba(255, 15, 15, 0.651)',    // Merah terang
        'rgba(15, 255, 15, 0.651)',    // Hijau terang
        'rgba(15, 15, 255, 0.651)',    // Biru terang
        'rgba(255, 255, 15, 0.651)',   // Kuning terang
        'rgba(15, 255, 255, 0.651)',   // Cyan terang
        'rgba(255, 15, 255, 0.651)',   // Magenta terang
        'rgba(255, 165, 0, 0.651)',    // Jingga
        'rgba(0, 128, 0, 0.651)',      // Hijau tua
        'rgba(0, 0, 128, 0.651)',      // Biru tua
        'rgba(128, 0, 128, 0.651)',    // Ungu
        'rgba(128, 128, 0, 0.651)',    // Cokelat
        'rgba(0, 128, 128, 0.651)'     // Cyan tua
    ];

    const randomColors = Math.floor(Math.random() * colors.length);    

    const shadows = [
        'rgba(0, 0, 0, 0.5)',    // Bayangan hitam dengan transparansi
        'rgba(128, 128, 128)',   // Bayangan abu-abu
        'rgba(255, 0, 0)',       // Bayangan merah
        'rgba(0, 255, 0)',       // Bayangan hijau
        'rgba(0, 0, 255)',       // Bayangan biru
        'rgba(255, 255, 255)',   // Bayangan putih
        'rgba(255, 165, 0)',     // Bayangan jingga
        'rgba(255, 192, 203)',   // Bayangan pink
        'rgba(255, 255, 0)',     // Bayangan kuning
        'rgba(0, 128, 128)',     // Bayangan cyan tua
        'rgba(139, 69, 19)'      // Bayangan coklat
    ];

    const randomShadows = Math.floor(Math.random() * shadows.length);

    document.addEventListener('mousemove', function(event) {
        cursor.style.top = `${event.pageY}px`;
        cursor.style.left = `${event.pageX}px`;
        cursor.style.visibility = "visible";
        cursor.style.backgroundColor =  colors[randomColors];
        cursor.style.boxShadow = `0 0 8px 3px ${shadows[randomShadows]}`;
    });
});