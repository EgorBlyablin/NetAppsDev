import { CardDetailsPage } from "../card-details/index.js";
import { CardPreviewComponent } from "../../components/card-preview/index.js";


export class MainPage {
    constructor(parent) {
        this.parent = parent;
    }

    get pageRoot() {
        return document.getElementById('main-page');
    }
        
    get html() {
        return `<div id="main-page" class="accordion"></div>`;
    }

    get data() {
        return [
            {
                src: "https://alfabank.servicecdn.ru/site-upload/1c/b5/187/D_cc_322x355_2.png",
                title: "Дебетовая карта Alfa Only Travel",
                text: "До 10% милями за travel-покупки, до 4% — за другие. Привилегии: страховка, трансферы, бизнес-залы."
            },
            {
                src: "https://alfabank.servicecdn.ru/site-upload/d4/77/187/D_CatalogCard_StickerKids.png",
                title: "Тонкий Альфа-Стикер",
                text: "Бесконтактная оплата. 990 ₽ в первый год, затем — бесплатно. Удобно носить под чехлом. Кэшбэк рублями или милями."
            },
            {
                src: "https://alfabank.servicecdn.ru/site-upload/28/8d/187/D_CatalogCard_Sticker.png",
                title: "Альфа-Стикер (базовый)",
                text: "590 ₽ в первый год, затем — бесплатно. Кэшбэк рублями или милями. Доступны 4 дизайна на выбор."
            },
            {
                src: "https://alfabank.servicecdn.ru/site-upload/b4/67/187/D_CatalogCard_290x290_131124.png",
                title: "Апельсиновая карта",
                text: "Кэшбэк 7% в «Пятёрочке» и «Перекрёстке», 1% — в остальных местах (кроме продуктовых). Бесплатная навсегда."
            },
            {
                src: "https://alfabank.servicecdn.ru/site-upload/2d/0a/187/D_CatalogCard_Aeroflot_290x290.png",
                title: "Дебетовая карта «Аэрофлот»",
                text: "До 1,5 миль за каждые 60 ₽. Бесплатный выпуск и обслуживание. Доступ к Альфа-Онлайн."
            },
            {
                src: "https://alfabank.servicecdn.ru/site-upload/5d/e6/187/M_card_short_aero.png",
                title: "Дебетовая карта Alfa Only Aeroflot",
                text: "До 2 миль за 60 ₽. Привилегии: страховка, трансферы, бизнес-залы. Бесплатно при выполнении условий."
            },
            {
                src: "https://alfabank.servicecdn.ru/site-upload/1f/0b/9465/image-10.png",
                title: "Семейная карта",
                text: "Для родных и близких. Бесплатная доставка и обслуживание. Кэшбэк рублями или милями. Совместный счёт в приложении."
            },
            {
                src: "https://alfabank.servicecdn.ru/site-upload/68/d1/187/D_CatalogCard_Sticker-1.png",
                title: "Детский стикер",
                text: "590 ₽ в первый год, затем — бесплатно. Кэшбэк до 100%. Приложение с играми учит обращаться с деньгами."
            }
        ];
    }
    
    renderDetaisPage(e) {
        const cardId = e.target.dataset.id;
    
        const cardDetailsPage = new CardDetailsPage(this.parent, this.data[cardId]);
        cardDetailsPage.render();
    }

    render() {
        this.parent.innerHTML = '';
        this.parent.insertAdjacentHTML('beforeend', this.html);
        
        this.data.forEach((item, index) => {
            const cardPreview = new CardPreviewComponent(this.pageRoot, {...item, id: index});
            cardPreview.render();
            cardPreview.addListener(this.renderDetaisPage.bind(this));
        });
    }
}