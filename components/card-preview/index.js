export class CardPreviewComponent { // Карточка предпросмотра карты
    constructor(parent, data) {
        this.parent = parent;
        this.data = data;
    }

    get html() {
        return (
            `
                <div class="col">
                    <div class="card rounded-4 p-4 h-100">
                        <img class="card-img flex-grow-1 p-4 object-fit-contain" src="${this.data.src}" alt="картинка"/>
                        <div class="card-body p-0 flex-grow-0">
                            <h5 class="card-title">${this.data.title}</h5>
                            <p class="card-text">${this.data.text}</p>
                            <button class="btn btn-primary" id="card-details-${this.data.id}" data-id="${this.data.id}">
                                Подробнее
                            </button>
                            <button class="btn btn-secondary" id="card-delete-${this.data.id}" data-id="${this.data.id}">
                                Удалить
                            </button>
                        </div>
                    </div>
                </div>
            `
        );
    }

    addDetailsListener(listener) { // Добавление вызова коллбека при нажатии кнопки "Подробнее"
        document
            .getElementById(`card-details-${this.data.id}`)
            .addEventListener("click", listener);
    }

    addDeleteListener(listener) { // Добавление вызова коллбека при нажатии кнопки "Удалить"
        document
            .getElementById(`card-delete-${this.data.id}`)
            .addEventListener("click", listener);
    }

    render() { // Отрисовка
        this.parent.insertAdjacentHTML('beforeend', this.html);
    }
}