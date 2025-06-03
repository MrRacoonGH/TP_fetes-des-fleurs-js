fetch('data.json')
  .then(response => {
    if (!response.ok) {
      throw new Error(`Erreur HTTP : ${response.status}`);
    }
    return response.json();
  })
  .then(data => {
    console.log("Offres spéciales fêtes des Mères :");
    data.special_offers.products.forEach(product => {
      console.log(`- ${product.name} (${product.price})`);
    });

    console.log("Fleurs pour le printemps :");
    data.spring_flowers.products.forEach(product => {
      console.log(`- ${product.name} (${product.price})`);
    });
  })
  .catch(error => {
    console.error("Erreur lors du chargement de data.json :", error);
  });

  const data = {
    "special_offers": {
      "products": [
        { "name": "Pot de fleur", "price": "20$", "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Etlingera_elatior1.jpg/800px-Etlingera_elatior1.jpg" },
        { "name": "Pot de fleur", "price": "20$", "image": "https://upload.wikimedia.org/wikipedia/commons/0/0c/Primula_%C3%97_polyantha_%27Zebra_Blue%27.jpg" },
        { "name": "Pot de fleur", "price": "20$", "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Anthurium_red.jpg/640px-Anthurium_red.jpg" }
      ]
    },
    "spring_flowers": {
      "products": [
        { "name": "Pot de fleur", "price": "20$", "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/Narcissus_February_Gold_02.jpg/800px-Narcissus_February_Gold_02.jpg" },
        { "name": "Pot de fleur", "price": "20$", "image": "https://upload.wikimedia.org/wikipedia/commons/2/2c/Crocus_tommasinianus1.jpg" },
        { "name": "Pot de fleur", "price": "20$", "image": "https://upload.wikimedia.org/wikipedia/commons/f/f4/Hyacinthus_01.jpg" },
        { "name": "Pot de fleur", "price": "20$", "image": "https://upload.wikimedia.org/wikipedia/commons/4/4c/Gazania_rigens6.jpg" },
        { "name": "Pot de fleur", "price": "20$", "image": "https://upload.wikimedia.org/wikipedia/commons/2/2c/Snowdrop_Flowers_%28Galanthus_nivalis%29.jpg" },
        { "name": "Pot de fleur", "price": "20$", "image": "https://upload.wikimedia.org/wikipedia/commons/f/f3/Helleborus_orientalis_pink_spotted.jpg" }
      ]
    }
  };

  function createCard(product) {
    const card = document.createElement('div');
    card.className = 'card';

    card.innerHTML = `
      <img src="${product.image}" alt="${product.name}">
      <div class="info">
        <div>${product.name}</div>
        <div class="price">${product.price}</div>
        <div class="cart-icon">🛒</div>
      </div>
    `;

    return card;
  }

  const specialContainer = document.getElementById('specialOffers');
  data.special_offers.products.forEach(product => {
    specialContainer.appendChild(createCard(product));
  });

  const springContainer = document.getElementById('springFlowers');
  data.spring_flowers.products.forEach(product => {
    springContainer.appendChild(createCard(product));
  });