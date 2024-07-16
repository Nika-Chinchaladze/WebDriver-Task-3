const BaseComponent = require("../common/base.component");

class TabComponent extends BaseComponent {
    constructor() {
        super('div.wZCOB');
    }

    get tabNumInstances() {
        return $('//span[text()="Number of Instances"]')
    }

}

module.exports = TabComponent;
