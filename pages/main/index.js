import { CardPreviewComponent } from "../../components/card-preview/index.js";
import { CardDetailsPage } from "../card-details/index.js";

import { getSumAndMultOfArray } from "../../exercises/1.4.js";
import { fill } from "../../exercises/1.9.js";
import { listToIntervals } from "../../exercises/2.2.js";
import { isPalindrom } from "../../exercises/3.8.js";


export class MainPage {
    cardsData = [
        {
            id: 1,
            src: "https://alfabank.servicecdn.ru/site-upload/1c/b5/187/D_cc_322x355_2.png",
            title: "Дебетовая карта Alfa Only Travel",
            text: "До 10% милями за travel-покупки, до 4% — за другие. Привилегии: страховка, трансферы, бизнес-залы."
        },
        {
            id: 2,
            src: "https://alfabank.servicecdn.ru/site-upload/d4/77/187/D_CatalogCard_StickerKids.png",
            title: "Тонкий Альфа-Стикер",
            text: "Бесконтактная оплата. 990 ₽ в первый год, затем — бесплатно. Удобно носить под чехлом. Кэшбэк рублями или милями."
        },
        {
            id: 3,
            src: "https://alfabank.servicecdn.ru/site-upload/28/8d/187/D_CatalogCard_Sticker.png",
            title: "Альфа-Стикер (базовый)",
            text: "590 ₽ в первый год, затем — бесплатно. Кэшбэк рублями или милями. Доступны 4 дизайна на выбор."
        },
        {
            id: 4,
            src: "https://alfabank.servicecdn.ru/site-upload/b4/67/187/D_CatalogCard_290x290_131124.png",
            title: "Апельсиновая карта",
            text: "Кэшбэк 7% в «Пятёрочке» и «Перекрёстке», 1% — в остальных местах (кроме продуктовых). Бесплатная навсегда."
        },
        {
            id: 5,
            src: "https://alfabank.servicecdn.ru/site-upload/2d/0a/187/D_CatalogCard_Aeroflot_290x290.png",
            title: "Дебетовая карта «Аэрофлот»",
            text: "До 1,5 миль за каждые 60 ₽. Бесплатный выпуск и обслуживание. Доступ к Альфа-Онлайн."
        },
        {
            id: 6,
            src: "https://alfabank.servicecdn.ru/site-upload/5d/e6/187/M_card_short_aero.png",
            title: "Дебетовая карта Alfa Only Aeroflot",
            text: "До 2 миль за 60 ₽. Привилегии: страховка, трансферы, бизнес-залы. Бесплатно при выполнении условий."
        },
        {
            id: 7,
            src: "https://alfabank.servicecdn.ru/site-upload/1f/0b/9465/image-10.png",
            title: "Семейная карта",
            text: "Для родных и близких. Бесплатная доставка и обслуживание. Кэшбэк рублями или милями. Совместный счёт в приложении."
        },
        {
            id: 8,
            src: "https://alfabank.servicecdn.ru/site-upload/68/d1/187/D_CatalogCard_Sticker-1.png",
            title: "Детский стикер",
            text: "590 ₽ в первый год, затем — бесплатно. Кэшбэк до 100%. Приложение с играми учит обращаться с деньгами."
        }
    ];

    constructor(parent) {
        this.parent = parent;
    }

    get cardsList() {
        return document.getElementById('cards-list');
    }
        
    get html() {
        return `
            <div class="d-flex flex-column gap-3">
                <div class="d-flex gap-3 justify-content-between">                    
                    <div class="d-flex gap-3">
                        <span class="badge text-bg-primary fs-5">
                            Всего карт: ${getSumAndMultOfArray(this.cardsData.map(() => 1)).sum}
                        </span>
                        <span class="badge text-bg-primary fs-5">
                            ID в списке: ${listToIntervals(this.cardsData.map(({id}) => id).sort((a, b) => a - b))}
                        </span>
                    </div>
                    
                    <div class="d-flex gap-3">
                        <button class="btn btn-secondary text-nowrap" id="btn-add">
                            Добавить карту
                        </button>
                        <div class="input-group rounded-5 overflow-hidden">
                            <input class="form-control" placeholder="Поиск" id="search-input"/>
                            <span class="d-none" id="palindrome-tag">Палиндром</span>
                        </div>
                    </div>
                </div>
                <div class="container-fluid px-0">
                    <div id="cards-list" class="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 row-cols-xxl-5 g-3">
                    </div>
                </div>
            </div>
        `;
    }
    
    renderDetailsPage(e) {
        // Извлекаем ID карты
        const cardId = e.target.dataset.id;
    
        // Создаем экземпляр страницы деталей карты
        const cardDetailsPage = new CardDetailsPage(this.parent, this.cardsData.find(({id}) => id === +cardId));
        cardDetailsPage.render();
    }

    addCard() {
        const newCard = { // Создаем новую карту
            id: Math.max(...this.cardsData.map(({id}) => id)) + 1,
            src: "https://alfabank.servicecdn.ru/site-upload/1c/b5/187/D_cc_322x355_2.png",
            title: "Дебетовая карта Alfa Only Travel",
            text: "До 10% милями за travel-покупки, до 4% — за другие. Привилегии: страховка, трансферы, бизнес-залы."
        };
        this.cardsData = fill(1, newCard).concat(this.cardsData);
        
        this.render();
    }

    deleteCard(e) {
        const cardId = +e.target.dataset.id; // Извлекаем ID карты
    
        // Удаляем экземпляр страницы деталей карты
        this.cardsData = this.cardsData.filter(({id}) => id !== cardId);
        this.render()
    }

    renderCardsList() {
        this.cardsList.innerHTML = '';
        const query = document.getElementById("search-input").value.toLowerCase()
        const palindromTagElement = document.getElementById("palindrome-tag");

        if (!query) {
            palindromTagElement.style.display = "none";
        } else if (isPalindrom(query)) {
            palindromTagElement.style.display = "block";
            palindromTagElement.innerHTML = "Палиндром";
            palindromTagElement.className = "badge text-bg-success fs-5";
        } else {
            palindromTagElement.style.display = "block";
            palindromTagElement.innerHTML = "Не палиндром";
            palindromTagElement.className = "badge text-bg-primary fs-5";
        }

        this.cardsData.filter(({title}) => title.toLowerCase().includes(query)).forEach((item) => {
            const cardPreview = new CardPreviewComponent(this.cardsList, {...item});
            cardPreview.render();
            // При нажатии на карточку будем отображать детали карточки
            cardPreview.addDetailsListener(this.renderDetailsPage.bind(this));
            cardPreview.addDeleteListener(this.deleteCard.bind(this));
        });
    }

    render() {
        this.parent.innerHTML = '';
        this.parent.insertAdjacentHTML('beforeend', this.html);
        document
            .getElementById("btn-add")
            .addEventListener("click", this.addCard.bind(this));
        
        this.renderCardsList();
        document
            .getElementById("search-input")
            .addEventListener("input", this.renderCardsList.bind(this));
    }
}