const BaseComponent = require("../common/base.component");

class EstimateComponent extends BaseComponent {
    constructor() {
        super('//span[text()="Add to estimate"]');
    }

    get addEstimate() {
        return this.rootEl;
    }
}

module.exports = EstimateComponent;
