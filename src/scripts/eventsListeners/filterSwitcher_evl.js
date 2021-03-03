import listInitializing from '../modules/listInitializing.js';
import { data } from '../storage/jsonData.js';
import { settings } from '../storage/elementsValues.js'

const filterSwitcherListener = () => {
    let filterButton = document.querySelector('[data-value="filterButtonByName"]');
    let filterInput = document.querySelector('[data-value="filterInputByName"]');

    filterButton.addEventListener('click', () => {
        filterData();
    });

    filterInput.addEventListener('keyup', (e) => {
        if (e.keyCode === 13) filterData();
    })

    function filterData() {
        let inputValue = filterInput.value;

        settings.filterValue = inputValue;
        listInitializing(settings.activeListType, data, settings.globalLanguage);

        filterInput.value = '';
    }
}

export default filterSwitcherListener;