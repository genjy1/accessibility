const profitWrapper = document.querySelector('.profit');
const profitCardContent = [
    {
        img:'./image/tshirts.jpg',
        price:1299,
        pricethrough:2598,
        name:'Пара футболок',
        sale:50
    },
    {
        img:'./image/tshirts.jpg',
        price:1299,
        pricethrough:2598,
        name:'Пара футболок',
        sale:50
    },
    {
        img:'./image/tshirts.jpg',
        price:1299,
        pricethrough:2598,
        name:'Пара футболок',
        sale:50
    },
    {
        img:'./image/tshirts.jpg',
        price:1299,
        pricethrough:2598,
        name:'Пара футболок',
        sale:50
    },
    {
        img:'./image/tshirts.jpg',
        price:1299,
        pricethrough:2598,
        name:'Пара футболок',
        sale:50
    },
    {
        img:'./image/tshirts.jpg',
        price:1299,
        pricethrough:2598,
        name:'Пара футболок',
        sale:50
    },
    {
        img:'./image/tshirts.jpg',
        price:1299,
        pricethrough:2598,
        name:'Пара футболок',
        sale:50
    },
    {
        img:'./image/tshirts.jpg',
        price:1299,
        pricethrough:2598,
        name:'Пара футболок',
        sale:50
    }
]

profitCardContent.map(card => {
    const cardHTML = `<a href="#" class="profit-card link" tabindex='1' aria-label="Карточка товара ${card.name}">
            <div class="sale-wrapper"><p class="sale" tabindex="1" aria-label="Скидка на товар ${card.name}">-${card.sale} %</p></div>
            <img src="${card.img}" alt="${card.name}" class="profit__card-image" aria-label="Изображение товара ${card.name}">
        <div class="text-container">
            <div class="price__wrapper">
                <p class="price" tabindex="1" aria-label="Цена на ${card.name}">${card.price} ₽</p>
                <p class="price-through" tabindex="1" aria-label="Старая цена на ${card.name}">${card.pricethrough} ₽</p>
            </div>
            <p class="profit-description" tabindex="1" aria-label="Название товара">${card.name}</p>
        </div>
    </a>`
    profitWrapper.insertAdjacentHTML('afterbegin', cardHTML)
})