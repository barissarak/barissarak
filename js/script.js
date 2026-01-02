document.getElementById('contactForm')?.addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById('message').value.trim();

    // Boş alan kontrolü (PDF Gereksinimi)
    if (!name || !email || !message) {
        alert('Erişim Reddedildi: Lütfen tüm alanları doldurun.');
        return;
    }

    alert("Mesaj güvenli bir şekilde gönderildi, Barış.");
    this.reset();
});