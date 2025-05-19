import { MainPage } from "../main/index.js";
import { CardDetailsComponent } from "../../components/card-details/index.js";
import { BackButtonComponent } from "../../components/back-button/index.js";
import { ajax } from "../../modules/ajax.js";
import { cardsUrls } from "../../modules/cardsUrls.js";


export class CardDetailsPage {
    constructor(parent, id) {
        this.parent = parent;
        this.id = id;
    }

    get pageRoot() {
        return document.getElementById('card-details-page');
    }

    get html() {
        return '<div id="card-details-page"></div>';
    }

    renderMainPage() {
        const mainPage = new MainPage(this.parent);
        mainPage.render();
    }

    loadCard() {
        ajax.get(cardsUrls.getCardById(this.id), (data) => {
            const cardDetails = new CardDetailsComponent(this.pageRoot, data);
            cardDetails.render();
        })
    }

    render() {
        this.parent.innerHTML = '';        
        this.parent.insertAdjacentHTML('beforeend', this.html);

        const backButton = new BackButtonComponent(this.pageRoot);
        backButton.render();
        backButton.addListeners(this.renderMainPage.bind(this));

        this.loadCard();
    }
}