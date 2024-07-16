const BaseComponent = require("../common/base.component");

class FormComponent extends BaseComponent {
    constructor() {
        super(".vHartc");
    }

    get numberInstance() {
        return this.rootEl.$('input[jsname="YPqjbf"]');
    }

    get provisionModelRegular() {
        return this.rootEl.$('label[for*="regular"]');
    }

    get operationalSystemList() {
        return this.rootEl.$('ul[aria-label="Operating System / Software"]').$("..");
    }

    get operationalSystemType() {
        return this.rootEl.$('ul[aria-label="Operating System / Software"] li[data-value="free-debian-centos-coreos-ubuntu-or-byol-bring-your-own-license"]')
    }

    get machineFamilyList() {
        return this.rootEl.$('ul[aria-label="Machine Family"]').$("..");
    }

    get machineFamilyType() {
        return this.rootEl.$('ul[aria-label="Machine Family"] li[data-value="general-purpose"]');
    }

    get seriesList() {
        return this.rootEl.$('ul[aria-label="Series"]').$("..");
    }

    get seriesN1() {
        return this.rootEl.$('ul[aria-label="Series"] li[data-value="n1"]');
    }

    get machineList() {
        return this.rootEl.$('ul[aria-label="Machine type"]').$("..");
    }

    get machineType() {
        return this.rootEl.$('ul[aria-label="Machine type"] li[data-value="n1-standard-8"]');
    }

    get switchCPUbtn() {
        return this.rootEl.$('button[aria-label="Add GPUs"]');
    }

    get cpuList() {
        return this.rootEl.$('ul[aria-label="GPU Model"]').$("..");
    }

    get cpuType() {
        return this.rootEl.$('ul[aria-label="GPU Model"] li[data-value="nvidia-tesla-p100"]');
    }

    get cpuNumberList() {
        return this.rootEl.$('ul[aria-label="Number of GPUs"]').$("..");
    }

    get cpuNumberType() {
        return this.rootEl.$('ul[aria-label="Number of GPUs"] li[data-value="1"]');
    }

    get localSsdList() {
        return this.rootEl.$('ul[aria-label="Local SSD"]').$("..");
    }

    get localSsdType() {
        return this.rootEl.$('ul[aria-label="Local SSD"] li[data-value="2"]');
    }

    get regionList() {
        return this.rootEl.$('ul[aria-label="Region"]').$("..");
    }

    get regionType() {
        return this.rootEl.$('ul[aria-label="Region"] li[data-value="europe-west1"]');
    }

    get oneYear() {
        return this.rootEl.$('label[for*="1-year"]');
    }
}

module.exports = FormComponent;
