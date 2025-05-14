export class BackButtonComponent { // Кнопка возврата назад
    constructor(parent) {
        this.parent = parent;
    }
    
    get html() { // Получение HTML-разметки кнопки
        return (
            `
                <button id="back-button" class="btn btn-secondary" type="button">
                    Назад
                </button>
            `
        );
    }

    addListeners(listener) { // Добавление прослушивателя события для вызова коллбека
        document
            .getElementById("back-button")
            .addEventListener("click", listener);
    }
        
    render() { // Отрисовка
        this.parent.insertAdjacentHTML('beforeend', this.html);
    }
}