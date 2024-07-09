const BaseComponent = require("../common/base.component");

class ComputeEngineComponent extends BaseComponent {
    constructor() {
        super('//div[@role="button"]//h2[text()="Compute Engine"]');
    }

    get computeEngine() {
        return this.rootEl;
    }
}

module.exports = ComputeEngineComponent;
