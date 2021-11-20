import { formUser, showForm,calcScoreFunction } from "./view.js";
import { renderData } from "./model.js";




        





const runAllFunction = () => {
    window.addEventListener('load', showForm());
    formUser();
    calcScoreFunction();
    renderData();
}
runAllFunction();
