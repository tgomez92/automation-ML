import Page from './page';
import { enums } from '../utils/enums';

const {
    categories
} = enums;

class HomePage extends Page {

    //Selectores
    get categoryBtn ()          { return $$('[role = "button"]')[1]}
    get technologyBtn()         { return $("a[role='button'][href='#']")}
    get celAndSmartPhonesBtn()  { return $$('.nav-categs-detail__body li a')[0]}
    get camDigitalesBtn()       { return $$('.nav-categs-detail__body li a')[6]}
    get tabletsBtn()            { return $$('.nav-categs-detail__body li a')[4]}
    get audioBtn()              { return $$('.nav-categs-detail__body li a')[10]}

    //Metodos

    open () {
        return super.open('/');
    }

    async clickOnCategories () {
        await this.categoryBtn.waitForClick();
    }

    async clickOnTechnology(){
        await this.technologyBtn.waitForClick();
    }

    async selectCategory(category){
        let selected;
        switch(category){
            case categories.celSamrtPhones:
                selected = await this.celAndSmartPhonesBtn;
                break;
            case categories.camDigitales:
                selected = await this.camDigitalesBtn;
                break;
            case categories.tablets:
                selected = await this.tabletsBtn;
                break;
            case categories.audio:
                selected = await this.audioBtn;
                break;
            default:
                throw new Error (`${category} is not valid type of category`);
        }
        await selected.waitForClick();
    }
    
}

export default new HomePage();
