// kayit-script.js

function gonder() {
    var email = document.getElementById('email').value;

    // Rastgele 6 haneli kod oluştur
    var kod = Math.floor(100000 + Math.random() * 900000);

    // E-posta gönderme işlemi
    emailjs.send("service_your_service_id", "template_your_template_id", {
        to_email: email,
        kod: kod
    }).then(function(response) {
        console.log("E-posta gönderildi", response);

        // Kullanıcıya kodun gönderildiği bilgisini ver
        alert("E-posta adresinize doğrulama kodu gönderildi. Lütfen kontrol edin!");

        // Doğrulama sayfasına yönlendir (bu sayfa henüz oluşturulmamış olabilir)
        window.location.href = "hesapdoğrulama.html";
    }, function(error) {
        console.error("E-posta gönderme hatası", error);
    });
}
