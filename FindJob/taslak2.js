// Bu dosyada Firebase Firestore'dan kullanıcı bilgilerini çekip kartları oluşturabilirsiniz.
// Örneğin:
// 1. Kullanıcı bilgilerini Firestore'dan çek
// 2. Her bir kullanıcı için bir kart oluştur
// 3. Kartı sayfadaki kart konteynerine ekle

// Örnek:
const users = [
    { name: "John Doe", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, adipisci." },
    { name: "Jane Doe", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, adipisci." },
    // ... Firestore'dan çekilen kullanıcı bilgileri buraya eklenecek
  ];
  
  const cardContainer = document.getElementById('userCardsContainer');
  
  // Kullanıcı bilgileri üzerinde döngü yaparak kartları oluştur
  users.forEach(user => {
    const card = document.createElement('div');
    card.classList.add('kart', 'item');
    card.setAttribute('data-merge', '1.7');
  
    card.innerHTML = `
      <img src="/img/ise-alim-sureci-nedir-1024x683.jpg" alt="" class="kartresim">
      <h5 class="baslikkart">${user.name}</h5>
      <p class="kartp">${user.description}</p>
    `;
  
    cardContainer.appendChild(card);
  });
  