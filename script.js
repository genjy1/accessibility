const profitWrapper = document.querySelector('.profit');
const offerWrapper = document.querySelector('.offers');
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
];
const offersCardContent = [
    {
        textContent:'Книга – лучший подарок',
        discount:'',
        backgroundImage:'./image/book.png',
        class:'book'
    },
    {
        textContent:'Время скидок!',
        discount:'-25%',
        backgroundImage:'./image/clocks.jpg',
        class:'clock'
    },
    {
        textContent:'',
        discount:'-40%',
        backgroundImage:'./image/redtapok.jpg',
        class:'sneaker'
    },
    {
        textContent:'Вторая пара кроссовок в подарок!',
        discount:'',
        backgroundImage:'./image/crossi.jpg',
        class:'shoes'
    },
    {
        textContent:'Идеи новогодних подарков',
        discount:'',
        backgroundImage:'./image/gifts.jpg',
        class:'gift'
    },
    {
        textContent:'Выгодно в декабре!',
        discount:'-15%',
        backgroundImage:'./image/note.jfif',
        class:'comp'
    },
    {
        textContent:'Новогодние украшения',
        discount:'',
        backgroundImage:'./image/2022.jpg',
        class:'year'
    },
    {
        textContent:'',
        discount:'-55%',
        backgroundImage:'./image/woman.jpg',
        class:'dress'
    },
    {
        textContent:'На бытовую химию',
        discount:'-25%',
        backgroundImage:'./image/pshikalka.jpg',
        class:'proper'
    },
    {
        textContent:'',
        discount:'',
        backgroundImage:'./image/balls.jpg',
        class:'newyear'
    }
]

offersCardContent.map(card => {
    const cardHTML = `
    <div class="offer-card ${card.class}" tabindex="1" aria-label="${card.textContent}" style="background-image:url('${card.backgroundImage}')">
        <p class="offer-content ${card.class}-content">${card.textContent = '' ? '' : card.textContent }</p>
        <div class="discount ${card.class}-discount"}"><p class="discount-content">${card.discount}</p></div>
    </div>
    `
    offerWrapper.insertAdjacentHTML('beforeend', cardHTML)
})

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