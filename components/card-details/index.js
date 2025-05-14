export class CardDetailsComponent { // Компонент страницы карты
    constructor(parent, data) {
        this.parent = parent;
        this.data = data; // данные карты
    }

    get html() {
        return (
            `
                <div class="card mt-2 rounded-4">
                    <div class="row g-0">
                        <div class="col-md-4">
                            <img src="${this.data.src}" class="img-fluid" alt="картинка">
                        </div>
                        <div class="col-md-8">
                            <div class="card-body">
                                <h5 class="card-title">${this.data.title}</h5>
                                <p class="card-text">${this.data.text}</p>
                            </div>
                        </div>
                    </div>
                </div>
            `
        );
    }

    render() { // Отрисовка
        this.parent.insertAdjacentHTML('beforeend', this.html);
    }
}