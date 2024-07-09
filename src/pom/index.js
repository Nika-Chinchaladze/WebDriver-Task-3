const SearchListComponent = require("./components/search-list/search-list.component");
const EstimateComponent = require("./components/estimate/estimate.component");
const ComputeEngineComponent = require("./components/engine/compute-engine.component");
const FormComponent = require("./components/form/form.component");
const TotalComponent = require("./components/total/total.component");

/**
 * @param name { 'search' | 'estimate' | 'engine' | 'form' | 'total' } 
 * @returns 
 */

function page(name) {
    const items = {
        search: new SearchListComponent(),
        estimate: new EstimateComponent(),
        engine: new ComputeEngineComponent(),
        form: new FormComponent(),
        total: new TotalComponent(),
    };
    return items[name.toLowerCase()];
}

module.exports = { page };
