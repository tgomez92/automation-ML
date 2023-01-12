import Page from './page';

class UbicationPage extends Page{

    //Selectors
    get firstPublication()  { return $$('h2.ui-search-item__title.shops__item-title')[0]}
    get getTitle()          { return $$('h2.ui-search-item__title.shops__item-title')[0]}
    get getPrice()          { return $$('.price-tag-text-sr-only')[0]}

    //Metodos

    async getFirstTitle(){
        return await this.getTitle.getText();
    }

    async getFirstPrice(){
        return await this.getPrice.getText();
    }

    async accessToPublication(){
        await this.firstPublication.waitForClick();
    }
}
export default new UbicationPage();