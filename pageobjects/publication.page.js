import Page from './page';

class PublicationPage extends Page{

    //Selectores
    get getPricePublication()   { return $$('.andes-visually-hidden')[1]}
    get getNamePublication()    { return $('h1.ui-pdp-title')}

    //Metodos

    async getPrice(){
        return await this.getPricePublication.getText();
    }

    async getName(){
        return await this.getNamePublication.getText();
    }
}
export default new PublicationPage();