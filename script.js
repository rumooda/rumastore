document.addEventListener('DOMContentLoaded', function() {
    console.log('TechStore загружен!');

    // Данные товаров с правильными путями к картинкам
    const productsByCategory = {
        smartphones: [
            {
                id: 'iphone14',
                name: "iPhone 14 Pro",
                price: "89 990 ₽",
                image: "images/iPhone 14 Pro.jpg",
                description: "Флагманский смартфон Apple с динамическим островом и камерой 48 Мп.",
                features: [
                    "6.1-дюймовый Super Retina XDR",
                    "Камера 48 Мп с улучшенным зумом",
                    "Чип A16 Bionic",
                    "Динамический остров",
                    "Always-On Display"
                ]
            },
            {
                id: 'samsung23',
                name: "Samsung Galaxy S23",
                price: "64 990 ₽",
                image: "images/Samsung Galaxy S23.jpg",
                description: "Мощный Android-смартфон с улучшенной камерой и процессором.",
                features: [
                    "6.1-дюймовый Dynamic AMOLED",
                    "Тройная камера 50 Мп",
                    "Snapdragon 8 Gen 2",
                    "Батарея 3900 мАч",
                    "Защита IP68"
                ]
            },
            {
                id: 'xiaomi13',
                name: "Xiaomi 13 Lite",
                price: "34 990 ₽",
                image: "images/Xiaomi 13 Lite.jpg",
                description: "Стильный смартфон с передовой камерой для селфи по доступной цене.",
                features: [
                    "6.55-дюймовый AMOLED 120 Гц",
                    "Двойная селфи-камера 32 Мп",
                    "Snapdragon 7 Gen 1",
                    "Быстрая зарядка 67 Вт",
                    "Тонкий дизайн 7.2 мм"
                ]
            }
        ],
        headphones: [
            {
                id: 'airpods',
                name: "Apple AirPods Pro",
                price: "24 990 ₽",
                image: "images/Apple AirPods Pro.jfif",
                description: "Беспроводные наушники с активным шумоподавлением и пространственным звуком.",
                features: [
                    "Активное шумоподавление",
                    "Пространственный звук",
                    "До 6 часов работы",
                    "Водостойкость IPX4",
                    "Зарядка через MagSafe"
                ]
            },
            {
                id: 'sonywh',
                name: "Sony WH-1000XM4",
                price: "29 990 ₽",
                image: "images/Sony WH-1000XM4.jpg",
                description: "Превосходные наушники с лучшим в классе шумоподавлением.",
                features: [
                    "Лучшее шумоподавление",
                    "До 30 часов работы",
                    "Сенсорное управление",
                    "Быстрая зарядка",
                    "Мульти-point подключение"
                ]
            }
        ],
        smartwatches: [
            {
                id: 'applewatch',
                name: "Apple Watch Series 8",
                price: "34 990 ₽",
                image: "images/Apple Watch Series 8.jfif",
                description: "Умные часы с отслеживанием здоровья и фитнес-функциями.",
                features: [
                    "Датчик температуры",
                    "Отслеживание сна",
                    "ЭКГ и уведомления о сердце",
                    "Always-On дисплей",
                    "Водостойкость 50м"
                ]
            },
            {
                id: 'samsungwatch',
                name: "Samsung Galaxy Watch 5",
                price: "22 990 ₽",
                image: "images/Samsung Galaxy Watch 5.jpg",
                description: "Стильные умные часы с расширенным отслеживанием здоровья.",
                features: [
                    "Датчик состава тела",
                    "Батарея до 50 часов",
                    "Защита IP68",
                    "Беспроводная зарядка",
                    "Wear OS"
                ]
            }
        ],
        tablets: [
            {
                id: 'ipadpro',
                name: "iPad Pro 12.9",
                price: "94 990 ₽",
                image: "images/iPad Pro 12.9.png",
                description: "Мощный планшет для профессионалов с дисплеем Liquid Retina XDR.",
                features: [
                    "12.9-дюймовый Liquid Retina XDR",
                    "Чип M2",
                    "Поддержка Apple Pencil",
                    "Дисплей ProMotion 120 Гц",
                    "Память до 2 ТБ"
                ]
            },
            {
                id: 'samsungtab',
                name: "Samsung Tab S8",
                price: "54 990 ₽",
                image: "images/Samsung Tab S8.jpg",
                description: "Универсальный планшет для работы и творчества с S-Pen в комплекте.",
                features: [
                    "11-дюймовый LCD 120 Гц",
                    "Snapdragon 8 Gen 1",
                    "S-Pen в комплекте",
                    "Батарея 8000 мАч",
                    "Встроенный акселерометр"
                ]
            }
        ],
        laptops: [
            {
                id: 'macbookpro',
                name: "MacBook Pro 16",
                price: "199 990 ₽",
                image: "images/MacBook Pro 16.jpg",
                description: "Профессиональный ноутбук для максимальной производительности.",
                features: [
                    "16.2-дюймовый Liquid Retina XDR",
                    "Чип M2 Pro/Max",
                    "До 96 ГБ оперативной памяти",
                    "До 8 ТБ SSD",
                    "До 22 часов работы"
                ]
            },
            {
                id: 'asusrog',
                name: "ASUS ROG Strix",
                price: "149 990 ₽",
                image: "images/ASUS ROG Strix.jfif",
                description: "Игровой ноутбук с топовой видеокартой и процессором.",
                features: [
                    "17.3-дюймовый IPS 240 Гц",
                    "RTX 4080 12 ГБ",
                    "Intel Core i9-13980HX",
                    "32 ГБ DDR5",
                    "RGB-подсветка"
                ]
            }
        ]
    };

    // Названия категорий
    const categoryNames = {
        smartphones: "Смартфоны",
        headphones: "Наушники",
        smartwatches: "Умные часы",
        tablets: "Планшеты",
        laptops: "Ноутбуки"
    };

    // Картинки для категорий на главной
    const categoryImages = {
        smartphones: "images/item1.jpeg",
        headphones: "images/item2.jpeg",
        smartwatches: "images/item3.jpeg",
        tablets: "images/item4.jpeg",
        laptops: "images/item5.jpeg"
    };

    // Корзина
    let cart = JSON.parse(localStorage.getItem('techstore_cart')) || [];
    let history = ['home'];

    // Загружаем главную страницу
    loadPage('home');

    // Навигация
    document.querySelectorAll('nav a').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const page = this.getAttribute('data-page');
            loadPage(page);
        });
    });

    function loadPage(page, category = null, product = null) {
        const content = document.getElementById('content');
        const backBtn = document.getElementById('backBtn');

        // Кнопка назад
        backBtn.style.display = page === 'home' ? 'none' : 'block';

        // Сохраняем в историю
        if (history[history.length - 1] !== page) {
            history.push(page);
        }

        // Загружаем контент
        if (page === 'home') {
            loadHomePage(content);
        } else if (page === 'category') {
            loadCategoryPage(content, category);
        } else if (page === 'product') {
            loadProductPage(content, category, product);
        } else if (page === 'cart') {
            loadCartPage(content);
        }

        window.scrollTo(0, 0);
    }

    function loadHomePage(container) {
        container.innerHTML = `
            <section class="hero">
                <h2>Новейшие гаджеты</h2>
                <p>Лучшие технологии по доступным ценам</p>
            </section>

            <section class="categories">
                <h2>Категории товаров</h2>
                <div class="categories-grid">
                    ${Object.entries(categoryNames).map(([id, name]) => `
                        <div class="category-card" onclick="loadPage('category', '${id}')">
                            <img src="${categoryImages[id]}" 
                                 alt="${name}" 
                                 onerror="this.src='https://via.placeholder.com/300x200?text=${name}'">
                            <h3>${name}</h3>
                        </div>
                    `).join('')}
                </div>
            </section>
        `;
    }

    function loadCategoryPage(container, categoryId) {
        const category = productsByCategory[categoryId];
        const categoryName = categoryNames[categoryId];

        container.innerHTML = `
            <section class="category-page">
                <h2>${categoryName}</h2>
                <div class="products-grid">
                    ${category.map(product => `
                        <div class="product-card" onclick="loadPage('product', '${categoryId}', '${product.id}')">
                            <img src="${product.image}" 
                                 alt="${product.name}" 
                                 onerror="this.src='https://via.placeholder.com/300x300?text=${product.name}'">
                            <h3>${product.name}</h3>
                            <p class="price">${product.price}</p>
                        </div>
                    `).join('')}
                </div>
            </section>
        `;
    }

    function loadProductPage(container, categoryId, productId) {
        const product = productsByCategory[categoryId].find(p => p.id === productId);

        container.innerHTML = `
            <section class="product-page">
                <div class="product-detail">
                    <img src="${product.image}" 
                         alt="${product.name}" 
                         onerror="this.src='https://via.placeholder.com/400x400?text=${product.name}'">
                    <div class="product-info">
                        <h2>${product.name}</h2>
                        <p class="price">${product.price}</p>
                        <p class="description">${product.description}</p>
                        
                        <h3>Характеристики:</h3>
                        <ul class="features">
                            ${product.features.map(f => `<li>${f}</li>`).join('')}
                        </ul>
                        
                        <button class="add-to-cart-btn" onclick="addToCart('${productId}', '${categoryId}')">
                            Добавить в корзину
                        </button>
                    </div>
                </div>
            </section>
        `;
    }

    function loadCartPage(container) {
        if (cart.length === 0) {
            container.innerHTML = `
                <section class="cart-page">
                    <h2>Корзина</h2>
                    <div class="empty-cart">
                        <p>Корзина пуста</p>
                        <button onclick="loadPage('home')">Продолжить покупки</button>
                    </div>
                </section>
            `;
        } else {
            let total = 0;
            
            container.innerHTML = `
                <section class="cart-page">
                    <h2>Корзина</h2>
                    <div class="cart-items">
                        ${cart.map((item, index) => {
                            const price = parseInt(item.price.replace(/\D/g, ''));
                            total += price * item.quantity;
                            
                            return `
                                <div class="cart-item">
                                    <img src="${item.image}" alt="${item.name}">
                                    <div class="item-info">
                                        <h4>${item.name}</h4>
                                        <p class="price">${item.price}</p>
                                        <div class="quantity-controls">
                                            <button onclick="changeQuantity(${index}, -1)">-</button>
                                            <span>${item.quantity}</span>
                                            <button onclick="changeQuantity(${index}, 1)">+</button>
                                        </div>
                                    </div>
                                    <button class="remove-btn" onclick="removeItem(${index})">×</button>
                                </div>
                            `;
                        }).join('')}
                    </div>
                    
                    <div class="cart-total">
                        <h3>Итого: ${total.toLocaleString()} ₽</h3>
                        <button class="checkout-btn" onclick="checkout()">Оформить заказ</button>
                    </div>
                </section>
            `;
        }
    }

    // Глобальные функции
    window.goBack = function() {
        if (history.length > 1) {
            history.pop();
            const prevPage = history[history.length - 1];
            loadPage(prevPage);
        }
    };

    window.loadPage = loadPage;

    window.addToCart = function(productId, categoryId) {
        const category = productsByCategory[categoryId];
        const product = category.find(p => p.id === productId);
        
        if (!product) return;
        
        // Ищем товар в корзине
        let found = false;
        for (let item of cart) {
            if (item.id === productId && item.category === categoryId) {
                item.quantity++;
                found = true;
                break;
            }
        }
        
        // Если не нашли, добавляем новый
        if (!found) {
            cart.push({
                id: productId,
                category: categoryId,
                name: product.name,
                price: product.price,
                image: product.image,
                quantity: 1
            });
        }
        
        // Сохраняем
        localStorage.setItem('techstore_cart', JSON.stringify(cart));
        
        // Показываем сообщение
        showCartMessage(`${product.name} добавлен в корзину!`);
    };

    window.changeQuantity = function(index, change) {
        if (cart[index]) {
            cart[index].quantity += change;
            
            if (cart[index].quantity <= 0) {
                cart.splice(index, 1);
            }
            
            localStorage.setItem('techstore_cart', JSON.stringify(cart));
            loadPage('cart');
        }
    };

    window.removeItem = function(index) {
        if (cart[index]) {
            cart.splice(index, 1);
            localStorage.setItem('techstore_cart', JSON.stringify(cart));
            loadPage('cart');
        }
    };

    window.checkout = function() {
        if (cart.length === 0) return;
        
        const total = cart.reduce((sum, item) => {
            return sum + (parseInt(item.price.replace(/\D/g, '')) * item.quantity);
        }, 0);
        
        // Заполняем модальное окно
        const orderItems = document.getElementById('orderItems');
        const orderTotal = document.getElementById('orderTotal');
        const modal = document.getElementById('orderModal');
        
        orderItems.innerHTML = cart.map(item => {
            const itemPrice = parseInt(item.price.replace(/\D/g, ''));
            const itemTotal = itemPrice * item.quantity;
            return `
                <div class="order-item">
                    <div>
                        <div class="order-item-name">${item.name}</div>
                        <div class="order-item-quantity">${item.quantity} шт.</div>
                    </div>
                    <div class="order-item-price">${itemTotal.toLocaleString()} ₽</div>
                </div>
            `;
        }).join('');
        
        orderTotal.textContent = `${total.toLocaleString()} ₽`;
        
        // Показываем модальное окно
        modal.style.display = 'flex';
        
        // Обработчик кнопки "Продолжить покупки"
        document.getElementById('continueShopping').onclick = function() {
            // Очищаем корзину
            cart = [];
            localStorage.setItem('techstore_cart', JSON.stringify(cart));
            
            // Закрываем модалку
            modal.style.display = 'none';
            
            // Переходим на главную
            loadPage('home');
        };
    };

    // Закрытие модалки при клике вне ее
    document.getElementById('orderModal').addEventListener('click', function(e) {
        if (e.target === this) {
            this.style.display = 'none';
        }
    });

    // Сообщение о добавлении в корзину (простое)
    function showCartMessage(text) {
        // Создаем сообщение
        const message = document.createElement('div');
        message.className = 'cart-message';
        message.textContent = text;
        document.body.appendChild(message);
        
        // Показываем
        setTimeout(() => {
            message.classList.add('show');
        }, 10);
        
        // Убираем через 2 секунды
        setTimeout(() => {
            message.classList.remove('show');
            setTimeout(() => {
                message.remove();
            }, 300);
        }, 2000);
    }
});