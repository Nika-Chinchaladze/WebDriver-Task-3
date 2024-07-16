const SearchListComponent = require("./components/search-list/search-list.component");
const EstimateComponent = require("./components/estimate/estimate.component");
const ComputeEngineComponent = require("./components/engine/compute-engine.component");
const FormComponent = require("./components/form/form.component");
const TotalComponent = require("./components/total/total.component");
const WindowComponent = require("./components/window/window.component");
const TabComponent = require("./components/tab/tab.component");
const OutComeComponent = require("./components/outcome/outcome.component");

/**
 * @param name { 'search' | 'estimate' | 'engine' | 'form' | 'total' | 'window' | 'tab' | 'outcome' } 
 * @returns 
 */

function page(name) {
    const items = {
        search: new SearchListComponent(),
        estimate: new EstimateComponent(),
        engine: new ComputeEngineComponent(),
        form: new FormComponent(),
        total: new TotalComponent(),
        window: new WindowComponent(),
        tab: new TabComponent(),
        outcome: new OutComeComponent(),
    };
    return items[name.toLowerCase()];
}

module.exports = { page };
