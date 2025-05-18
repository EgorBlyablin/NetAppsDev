import { MainPage } from "../main/index.js";
import { CardDetailsComponent } from "../../components/card-details/index.js";
import { BackButtonComponent } from "../../components/back-button/index.js";


export class CardDetailsPage {
    constructor(parent, data) {
        this.parent = parent;
        this.data = data;
    }

    get pageRoot() {
        return document.getElementById('card-details-page');
    }

    get html() {
        return '<div id="card-details-page"></div>';
    }

    clickBack() {
        const mainPage = new MainPage(this.parent);
        mainPage.render();
    }

    render() {
        this.parent.innerHTML = '';        
        this.parent.insertAdjacentHTML('beforeend', this.html);

        const backButton = new BackButtonComponent(this.pageRoot);
        backButton.render();
        backButton.addListeners(this.clickBack.bind(this));

        const cardDetails = new CardDetailsComponent(this.pageRoot, this.data);
        cardDetails.render();
    }
}