function submitForm() {
    var firstName = document.getElementById('firstName').value;
    var lastName = document.getElementById('lastName').value;
    var age = document.getElementById('age').value;
    var company = document.getElementById('company').value;
    var title = document.getElementById('title').value;
    var bio = document.getElementById('bio').value;

    if (firstName && lastName && age && company && title && bio) {
        alert("Başarıyla kayıt oldunuz!\n\n" +
            "İsim: " + firstName + " " + lastName + "\n" +
            "Yaş: " + age + "\n" +
            "Şirket: " + company + "\n" +
            "Ünvan: " + title + "\n" +
            "Tanıtım: " + bio);
    } else {
        alert("Lütfen tüm alanları doldurun.");
    }
}