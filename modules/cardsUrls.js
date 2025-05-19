class CardsUrls {
    constructor() {
        this.baseUrl = 'http://localhost:3000';
    }

    getCards(title) {
        return `${this.baseUrl}/cards${title ? '?title='.concat(title) : ''}`;
    }

    getCardById(id) {
        return `${this.baseUrl}/cards/${id}`;
    }

    createCard() {
        return `${this.baseUrl}/cards`;
    }

    removeCardById(id) {
        return `${this.baseUrl}/cards/${id}`;
    }

    updateCardById(id) {
        return `${this.baseUrl}/cards/${id}`;
    }
}

export const cardsUrls = new CardsUrls();