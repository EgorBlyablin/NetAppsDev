import { MainPage } from "./pages/main/index.js";

const root = document.getElementById('root');

const renderMainPage = () => {
    const mainPage = new MainPage(root); // Инициализаруем главную страницу
    mainPage.render(); // Отрисовывае ее
}

renderMainPage()

document
    .getElementById(`btn-home`)
    .addEventListener("click", renderMainPage); // Переотрисовываем при нажатии "Домой"
