import { data } from '../storage/jsonData.js';
import { settings } from '../storage/elementsValues.js';
import sortBy from '../modules/sortBy.js';
import listInitializing from '../modules/listInitializing.js';

const sortBySwitcherListener = () => {
    let sortByIdBtn = document.querySelector('[data-value="sortByIdButton"]');
    let sortByNameBtn = document.querySelector('[data-value="sortByNameButton"]');
    let sortByAgeBtn = document.querySelector('[data-value="sortByAgeButton"]');
    let sortByAscendingBtn = document.querySelector('[data-value="sortAscendingButton"]');
    let sortByDescendingBtn = document.querySelector('[data-value="sortDescendingButton"]');


    sortByIdBtn.addEventListener('click', () => {
        settings.sortField = 'id';
        listInitializing(settings.activeListType, data, settings.globalLanguage);
    });

    sortByNameBtn.addEventListener('click', () => {
        settings.sortField = 'name';
        listInitializing(settings.activeListType, data, settings.globalLanguage);
    });

    sortByAgeBtn.addEventListener('click', () => {
        settings.sortField = 'age';
        listInitializing(settings.activeListType, data, settings.globalLanguage);
    });

    sortByAscendingBtn.addEventListener('click', () => {
        settings.sequence = 'ascending';
        listInitializing(settings.activeListType, data, settings.globalLanguage);
    });

    sortByDescendingBtn.addEventListener('click', () => {
        settings.sequence = 'descending';
        listInitializing(settings.activeListType, data, settings.globalLanguage);
    });

}

export default sortBySwitcherListener;