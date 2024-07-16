const BaseComponent = require("../common/base.component");

class OutComeComponent extends BaseComponent {
    constructor() {
        super('//div[@class="wZCOB"]');
    }

    get numberOfInstance() {
        return this.rootEl.$('//span[contains(text(), "Number of Instances")]//following-sibling::span');
    }

    get operatingSystem() {
        return this.rootEl.$('//span[contains(text(), "Operating System")]//following-sibling::span');
    }

    get provisionModel() {
        return this.rootEl.$('//span[contains(text(), "Provisioning Model")]//following-sibling::span');
    }

    get machineTypeFinal() {
        return this.rootEl.$('//span[contains(text(), "Machine type")]//following-sibling::span');
    }

    get cpuModel() {
        return this.rootEl.$('//span[contains(text(), "GPU Model")]//following-sibling::span');
    }

    get numberOfCPU() {
        return this.rootEl.$('//span[contains(text(), "Number of GPUs")]//following-sibling::span');
    }

    get localSSD() {
        return this.rootEl.$('//span[contains(text(), "Local SSD")]//following-sibling::span');
    }

    get region() {
        return this.rootEl.$('//span[contains(text(), "Region")]//following-sibling::span');
    }

    get commitYear() {
        return this.rootEl.$('//span[contains(text(), "Committed use discount options")]//following-sibling::span');
    }
}

module.exports = OutComeComponent;