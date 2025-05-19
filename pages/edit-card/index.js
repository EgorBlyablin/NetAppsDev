import { MainPage } from "../main/index.js"
import { BackButtonComponent } from "../../components/back-button/index.js";
import { ajax } from "../../modules/ajax.js";
import { cardsUrls } from "../../modules/cardsUrls.js";


export class EditCardPage {
    constructor(parent, id) {
        this.parent = parent;
        this.id = id;
    }

    getHtml(data) {
        return (
            `
                <div class="card p-3 rounded-4 mt-3">
                    <form id="edit-card-form">
                        <h2 class="fs-3">${this.id ? "Изменение" : "Добавление"} карты</h2>
                        <div class="mb-3">
                            <label for="title" class="form-label">Название карты</label>
                            <input class="rounded-4 form-control" id="card-title" required value="${data?.title || ''}">
                        </div>
                        <div class="mb-3">
                            <label for="text" class="form-label">Описание карты</label>
                            <textarea class="rounded-4 form-control" id="card-text" required>${data?.text || ''}</textarea>
                        </div>
                        <div class="mb-3">
                            <label for="src" class="form-label">Ссылка на изображение карты</label>
                            <input class="rounded-4 form-control" id="card-src" required value="${data?.src || ''}">
                        </div>
                        <div class="d-flex justify-content-end">
                            <button type="submit" class="btn btn-primary">${this.id ? "Сохранить" : "Добавить"}</button>
                        <div>
                    </form>
                </div>
            `
        );
    }

    renderMainPage() {
        const mainPage = new MainPage(this.parent);
        mainPage.render();
    }

    saveCard() {
        const data = {
            title: document.getElementById("card-title").value,
            text: document.getElementById("card-text").value,
            src: document.getElementById("card-src").value,
        }

        if (this.id) {
            ajax.patch(cardsUrls.updateCardById(this.id), data, this.renderMainPage.bind(this))
        } else {
            ajax.post(cardsUrls.createCard(), data, this.renderMainPage.bind(this))
        }
    }

    renderEditor(data) {
        this.parent.insertAdjacentHTML('beforeend', this.getHtml(data));
        document.getElementById("edit-card-form").addEventListener("submit", (event) => {
            event.preventDefault();
            this.saveCard();
        })
    }

    render() {
        this.parent.innerHTML = '';
        
        const backButton = new BackButtonComponent(this.parent);
        backButton.render();
        backButton.addListeners(this.renderMainPage.bind(this));

        if (this.id) {
            ajax.get(cardsUrls.getCardById(this.id), (data) => this.renderEditor(data));
        } else {
            this.renderEditor();
        }
        
    }
}