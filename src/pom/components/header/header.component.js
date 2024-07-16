const BaseComponent = require("../common/base.component");

class HeaderComponent extends BaseComponent {
    constructor() {
        super('header');
    }

    get searchIcon() {
        return this.rootEl.$(".DPvwYc");
    }

    get searchInput() {
        return this.rootEl.$("input#i4");
    }

}

module.exports = HeaderComponent;
