const BaseComponent = require("../common/base.component");

class WindowComponent extends BaseComponent {
    constructor() {
        super('a[track-name="open estimate summary"]');
    }

    get openEstimateSum() {
        return this.rootEl;
    }

}

module.exports = WindowComponent;
