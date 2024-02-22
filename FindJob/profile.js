// Firebase yapılandırması
const firebaseConfig = {
    apiKey: "your-api-key",
    authDomain: "your-auth-domain",
    projectId: "your-project-id",
    storageBucket: "your-storage-bucket",
    messagingSenderId: "your-messaging-sender-id",
    appId: "your-app-id"
};

// Firebase projeyi başlat
firebase.initializeApp(firebaseConfig);

// Firestore referansı
const db = firebase.firestore();

// Kullanıcı bilgilerini güncelleme fonksiyonu
function updateUserInfo() {
    const ad = document.getElementById('ad').value;
    const soyad = document.getElementById('soyad').value;
    const universite = document.getElementById('universite').value;
    const bolum = document.getElementById('bolum').value;
    const yas = document.getElementById('yas').value;
    const email = document.getElementById('email').value;
    const sifre = document.getElementById('sifre').value;
    const biyografi = document.getElementById('biyografi').value;

    // Firestore'da belirli bir kullanıcı koleksiyonu oluşturun (örneğin: "kullanicilar")
    const kullaniciRef = db.collection('kullanicilar').doc(email);

    // Kullanıcı bilgilerini güncelle
    kullaniciRef.set({
        ad: ad,
        soyad: soyad,
        universite: universite,
        bolum: bolum,
        yas: yas,
        sifre: sifre,
        biyografi: biyografi
    })
    .then(() => {
        alert('Kullanıcı bilgileri güncellendi!');
    })
    .catch((error) => {
        console.error('Hata:', error);
        alert('Bir hata oluştu, lütfen tekrar deneyin.');
    });
}
