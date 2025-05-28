import { CardDetailsPage } from "../card-details/index.js";
import { CardPreviewComponent } from "../../components/card-preview/index.js";
import { cardsUrls } from "../../modules/cardsUrls.js";
import { EditCardPage } from "../edit-card/index.js";
import { jsonFetch } from "../../modules/fetch.js";


export class MainPage {
    constructor(parent) {
        this.parent = parent;
    }

    get cardsList() {
        return document.getElementById('cards-list');
    }
        
    get html() {
        return `
            <div class="d-flex flex-column gap-3 align-items-start">
                <div class="d-flex gap-3">
                    <button class="btn btn-secondary" id="btn-add">
                        Добавить
                    </button>
                    <input class="form-control rounded-5" placeholder="Поиск" id="search-input"/>
                </div>
                <div class="container-fluid px-0">
                    <div id="cards-list" class="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 g-3">
                    </div>
                </div>
            </div>
        `;
    }
    
    async renderDetailsPage(e) {
        // Извлекаем ID карты
        const cardId = +e.target.dataset.id;
    
        // Создаем экземпляр страницы деталей карты
        const cardDetailsPage = new CardDetailsPage(this.parent, cardId);
        await cardDetailsPage.render();
    }

    async renderEditCardPage(e) {
        // Извлекаем ID карты
        const cardId = +e.target.dataset.id;
    
        // Создаем экземпляр страницы редактирования карты
        const editCardPage = new EditCardPage(this.parent, cardId)
        await editCardPage.render()
    }

    async deleteCard(e) {
        const cardId = +e.target.dataset.id; // Извлекаем ID карты
    
        // Удаляем экземпляр карты и загружаем карточки заново
        await fetch(cardsUrls.removeCardById(cardId), { method: "DELETE" });
        await this.loadCards();
    }

    renderCardsList(data) {
        this.cardsList.innerHTML = '';

        data.forEach((item) => {
            const cardPreview = new CardPreviewComponent(this.cardsList, {...item});
            cardPreview.render();
            // При нажатии на карточку будем отображать детали карточки
            cardPreview.addDetailsListener(this.renderDetailsPage.bind(this));
            cardPreview.addEditListener(this.renderEditCardPage.bind(this));
            cardPreview.addDeleteListener(this.deleteCard.bind(this));
        });
    }
    
    async loadCards() {
        const query = document.getElementById("search-input").value.toLowerCase()

        const response = await jsonFetch.get(cardsUrls.getCards(query));
        const data = await response.json();

        this.renderCardsList(data);
    }

    render() {
        this.parent.innerHTML = '';
        this.parent.insertAdjacentHTML('beforeend', this.html);
        document
            .getElementById("btn-add")
            .addEventListener("click", this.renderEditCardPage.bind(this));
        
        this.loadCards();
        document
            .getElementById("search-input")
            .addEventListener("input", this.loadCards.bind(this));
    }
}