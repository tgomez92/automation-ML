import Page from './page';

class WantedPage extends Page {

    //Selectores
    get mostWantedArticleBtn () { return $('.ui-category-trends-entry-content')}
    get pageName()              { return $('.ui-search-breadcrumb__title.shops-custom-primary-font')}
    get getResult()             { return $('.ui-search-search-result__quantity-results.shops-custom-secondary-font')}
    get accessMontevideo()      { return $('a[aria-label="Montevideo"]')} 

    //Metodos

    async accessToWanted(){
        await this.mostWantedArticleBtn.waitForClick();
    }

    async getPageName(){
        return await this.pageName.getText();
    }

    async getCategoryResult(){
        return this.getResult.getText();
    }

    async clickOnMontevideo(){
        await this.accessMontevideo.scrollIntoView();
        await this.accessMontevideo.waitForClick();
    }
}

export default new WantedPage();
