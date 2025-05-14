import { MainPage } from "./pages/main/index.js";

const root = document.getElementById('root');

const mainPage = new MainPage(root); // Инициализаруем главную страницу
mainPage.render(); // Отрисовывае ее

