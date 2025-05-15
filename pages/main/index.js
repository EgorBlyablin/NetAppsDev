import { CardDetailsPage } from "../card-details/index.js";
import { CardPreviewComponent } from "../../components/card-preview/index.js";


export class MainPage {
    constructor(parent) {
        this.parent = parent;
    }

    get pageRoot() {
        return document.getElementById('main-page');
    }
        
    get html() {
        return `<div id="main-page"></div>`;
    }

    get data() {
        return [
            {
                src: "https://alfabank.servicecdn.ru/site-upload/1c/b5/187/D_cc_322x355_2.png",
                title: "Дебетовая карта Alfa Only Travel",
                text: "До 10% милями за travel-покупки, до 4% — за другие. Привилегии: страховка, трансферы, бизнес-залы."
            },
            // ...
        ];
    }
    
    renderDetailsPage(e) {
        // Извлекаем ID карты
        const cardId = e.target.dataset.id;
    
        // Создаем экземпляр страницы деталей карты
        const cardDetailsPage = new CardDetailsPage(this.parent, this.data[cardId]);
        cardDetailsPage.render();
    }

    render() {
        this.parent.innerHTML = '';
        this.parent.insertAdjacentHTML('beforeend', this.html);
        
        this.data.forEach((item, index) => {
            const cardPreview = new CardPreviewComponent(this.pageRoot, {...item, id: index});
            cardPreview.render();
            // При нажатии на карточку будем отображать детали карточки
            cardPreview.addListener(this.renderDetailsPage.bind(this));
        });
    }
}