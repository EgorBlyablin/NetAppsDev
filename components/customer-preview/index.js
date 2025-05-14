import { isPalindrom } from "../../exercises/3.8.js"


export class CustomerPreviewComponent { // Карточка предпросмотра задания
    constructor(parent, id, data) {
        this.parent = parent;
        this.id = id;
        this.data = data;
    }

    get html() {
        console.log(this.id)
        return (
            Number.isNaN(this.id)
            ? `<div class="card rounded-4 my-4 p-3 pb-2">
                <div class="card-body">
                    <h5 class="card-title placeholder-glow">
                        <span class="placeholder col-8 rounded-4"></span>
                    </h5>
                </div>
            </div>
            `
            : `<div class="card rounded-4 my-4 p-3 pb-2" id="click-card-${this.id}" data-id="${this.id}">
                <div class="card-body">
                    <h5 class="card-title">
                        ${this.data.name}
                        ${
                            isPalindrom(this.data.name)
                            ? '<span class="badge text-bg-primary">Особый клиент</span>'
                            : ''
                        }
                    </h5>
                </div>
            </div>
            `
        );
    }

    addListener(listener) { // Добавление вызова коллбека при нажатии кнопки
        document
            .getElementById(`click-card-${this.id}`)
            .addEventListener("click", listener);
    }

    render() { // Отрисовка
        this.parent.insertAdjacentHTML('beforeend', this.html);
    }
}