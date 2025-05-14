import { MainPage } from "../main/index.js";
import { CustomerDetailsComponent } from "../../components/customer-details/index.js";
import { BackButtonComponent } from "../../components/back-button/index.js";


export class CustomerDetailsPage {
    constructor(parent, data) {
        this.parent = parent;
        this.data = data;
    }

    get pageRoot() {
        return document.getElementById('customer-details-page');
    }

    get html() {
        return '<div id="customer-details-page"></div>';
    }

    clickBackButtonHandler() {
        const mainPage = new MainPage(this.parent);
        mainPage.render();
    }

    render() {
        this.parent.innerHTML = '';        
        this.parent.insertAdjacentHTML('beforeend', this.html);

        const backButton = new BackButtonComponent(this.pageRoot);
        backButton.render();
        backButton.addListeners(this.clickBackButtonHandler.bind(this));

        const customerDetails = new CustomerDetailsComponent(this.pageRoot, this.data);
        customerDetails.render();
    }
}