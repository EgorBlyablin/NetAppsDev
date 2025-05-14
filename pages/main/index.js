import { CustomerPreviewComponent } from "../../components/customer-preview/index.js";
import { CustomerDetailsPage } from "../customer-details/index.js";
import { fill } from "../../exercises/1.9.js"


export class MainPage {
    constructor(parent) {
        this.parent = parent;
    }

    get customersData() {
        return [
            {
                name: "Энакин",
                activeDays: [1, 2, 3, 4, 5, 7, 8, 9, 10, 15, 20, 21, 22, 29, 30],
                creditApprovalFactors: [0.5, 1.2, 3, 0.8, 1.7],
                transactions: [1200, -300, 140, -3000, 5600, 100, -600]
            },
            {
                name: "Заз",
                activeDays: [2, 3, 4, 5, 6, 26, 27, 28],
                creditApprovalFactors: [1.1, 0.9, 2.5, 1.3, 0.7],
                transactions: [500, -200, 300, -1500, 2500, 400, -800]
            },
            {
                name: "Палпатин",
                activeDays: [21, 22, 23, 25, 26, 27],
                creditApprovalFactors: [0.8, 1.5, 2.0, 1.0, 1.2],
                transactions: [800, -100, 200, -2500, 3000, 200, -500]
            },
            {
                name: "Джа-джа",
                activeDays: [1, 10, 11],
                creditApprovalFactors: [1.0, 1.3, 0.9, 1.8, 2.2],
                transactions: [1000, -400, 500, -2000, 4000, 300, -700]
            },
            {
                name: "Лея",
                activeDays: [],
                creditApprovalFactors: [0.7, 1.4, 1.6, 1.1, 2.0],
                transactions: [600, -300, 400, -1800, 3500, 500, -900]
            }
        ];
    }


    get pageRoot() {
        return document.getElementById('main-page');
    }

    get html() {
        return '<div id="main-page"></div>';
    }

    renderCustomerDetailsPage(e) {
        const customerId = +e.currentTarget.dataset.id;
    
        const customerDetails = new CustomerDetailsPage(
            this.parent,
            this.customersData[customerId]
        );
        customerDetails.render();
    }

    renderSkeleton() {
        this.parent.innerHTML = '';
        this.parent.insertAdjacentHTML('beforeend', this.html);

        const fakeData = fill(this.customersData.length, { // Создаем массив-заглушку
            id: NaN,
            name: 'Загрузка...'
        });
        
        fakeData.forEach(({id, ...data}) => {
            const customerPreview = new CustomerPreviewComponent(this.parent, id, data);
            customerPreview.render();
        });
    }

    renderReal() {
        this.parent.innerHTML = '';
        this.parent.insertAdjacentHTML('beforeend', this.html);

        this.customersData.forEach((data, index) => {
            const customerPreview = new CustomerPreviewComponent(this.parent, index, data);
            customerPreview.render();
            customerPreview.addListener(this.renderCustomerDetailsPage.bind(this))
        });
    }

    render() {
        this.renderSkeleton(); // Отрисовываем скелетон
        setTimeout(() => this.renderReal(), 400); // Отрисовываем реальные данные
    }
}