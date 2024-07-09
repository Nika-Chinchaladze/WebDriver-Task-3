const BaseComponent = require("../common/base.component");

class SearchListComponent extends BaseComponent {
    constructor() {
        super('div[jsname="J6ONMd"]');
    }

    get pricingCalculator() {
        return this.rootEl.$('a[href="https://cloud.google.com/products/calculator"]');
    }
}

module.exports = SearchListComponent;
