export class CardPreviewComponent { // Карточка предпросмотра карты
    constructor(parent, data) {
        this.parent = parent;
        this.data = data;
    }

    get html() {
        return (
            `
                <div class="card rounded-4 my-4 p-3">
                    <div class="row g-0">
                        <div class="col-4 d-flex align-items-center">
                            <img class="card-img" src="${this.data.src}" alt="картинка">
                        </div>
                        <div class="col-8" >
                            <div class="card-body">
                                <h5 class="card-title">${this.data.title}</h5>
                                <p class="card-text">${this.data.text}</p>
                                <button class="btn btn-primary" id="click-card-${this.data.id}" data-id="${this.data.id}">
                                    Подробнее
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            `
        );
    }

    addListener(listener) { // Добавление вызова коллбека при нажатии кнопки
        document
            .getElementById(`click-card-${this.data.id}`)
            .addEventListener("click", listener);
    }

    render() { // Отрисовка
        this.parent.insertAdjacentHTML('beforeend', this.html);
    }
}