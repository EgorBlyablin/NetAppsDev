import { getSumAndMultOfArray } from "../../exercises/1.4.js";
import { listToIntervals } from "../../exercises/2.2.js";


export class CustomerDetailsComponent { // Компонент страницы клиента
    constructor(parent, data) {
        this.parent = parent;
        this.data = data; // данные клиента
    }

    get html() {
        return (
            `
                <div class="card mt-2 rounded-4">
                    <div class="card-body">
                        <h5 class="card-title text-center">${this.data.name}</h5>
                        <p class="card-text">
                            Кредитный рейтинг:
                            <b>
                                ${getSumAndMultOfArray(this.data.creditApprovalFactors).mult.toFixed(2)}
                            </b>
                        </p>
                        <p class="card-text">
                            Изменение баланса:
                            <b>
                                ${getSumAndMultOfArray(this.data.transactions).sum}
                            </b>
                        </p>
                        <p class="card-text">
                            Посещение банка:
                            <b>
                                ${listToIntervals(this.data.activeDays) || 'нет'}
                            </b>
                        </p>
                    </div>
                </div>
            `
        );
    }

    render() { // Отрисовка
        this.parent.insertAdjacentHTML('beforeend', this.html);
    }
}