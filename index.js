const btn = document.querySelector('.btn');

// Check karein ki button page par exist karta hai ya nahi
if (btn) {
    btn.addEventListener('click', function() {
        // Yeh line page ko turant reload kar degi
        window.location.reload(); 
    });
}
