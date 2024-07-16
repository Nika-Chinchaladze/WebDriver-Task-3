const BaseComponent = require("../common/base.component");

class TotalComponent extends BaseComponent {
    constructor() {
        super('div[class="KDVqKe"]');
    }

    get calculatedPrice() {
        return this.rootEl.$("label.gt0C8e");
    }

    get shareBtn() {
        return this.rootEl.$("span.FOBRw-vQzf8d");
    }
}

module.exports = TotalComponent;
