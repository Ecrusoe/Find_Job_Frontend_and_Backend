const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');

registerBtn.addEventListener('click', () => {
    container.classList.add("active");
});

loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
});

function checkSelection() {
 var checkboxes = document.querySelectorAll('.userTypeForm input[type="checkbox"]');
 var checkedCount = 0;

 checkboxes.forEach(function(checkbox) {
     if (checkbox.checked) {
         checkedCount++;
     }
 });

 if (checkedCount > 1) {
     alert("Lütfen sadece bir seçeneği işaretleyin.");
     // İstenmeyen durumu kontrol etmek için istediğiniz işlemleri burada yapabilirsiniz.
     // Örneğin: checkbox'ları temizleyebilir veya seçili olanları işaretsiz bırakabilirsiniz.
 }
}
function proceed() {
 // Seçilen radio butonunu kontrol et
 var userType = document.querySelector('input[name="userType"]:checked');



  // Eğer seçenek yoksa uyarı ver
 if (!userType) {
     alert("Lütfen bir kullanıcı türü seçin.");
     return;
 }

 // Kullanıcı türüne göre yönlendirme yap
 if (userType.value === "student") {
     window.location.href = "ogrencikismi.html";
 } else if (userType.value === "employer") {
     window.location.href = "bilgisayfasitaslak.html";
 }
}
function redirectToNextPage(event) {
    // Formun varsayılan davranışını (sayfa yenilemeyi) engelle
    event.preventDefault();

    // Diğer sayfaya yönlendirme işlemi
    window.location.href = "hesapdoğrulama.html";
}

















