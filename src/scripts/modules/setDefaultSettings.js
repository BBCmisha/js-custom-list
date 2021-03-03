import { settings } from '../storage/elementsValues.js';

const setDefaultSettings = () => {
    let activeClass = 'button_active';
    let sortByIdBtn = document.querySelector('[data-value="sortByIdButton"]');
    let sortByNameBtn = document.querySelector('[data-value="sortByNameButton"]');
    let sortByAgeBtn = document.querySelector('[data-value="sortByAgeButton"]');
    let sortAscendingBtn = document.querySelector('[data-value="sortAscendingButton"]');
    let sortDescendingBtn = document.querySelector('[data-value="sortDescendingButton"]');
    let ruSwitcherBtn = document.querySelector('[data-value="ruSwitcher"]');
    let enSwitcherBtn = document.querySelector('[data-value="enSwitcher"]');
    let changeToTableBtn = document.querySelector('[data-value="changeToTableButton"]');
    let changeToPreviewBtn = document.querySelector('[data-value="changeToPreviewButton"]');

    function setLanguage() {
        if (settings.globalLanguage == 'en') {
            enSwitcherBtn.classList.add(activeClass);
        } else if (settings.globalLanguage == 'ru') {
            ruSwitcherBtn.classList.add(activeClass);
        }
    }

    function setSortBy() {
        if (settings.sortField == 'id') {
            sortByIdBtn.classList.add(activeClass);
        } else if (settings.sortField == 'name') {
            sortByNameBtn.classList.add(activeClass);
        } else if (settings.sortField == 'age') {
            sortByAgeBtn.classList.add(activeClass);
        }
    }

    function setSequence() {
        if (settings.sequence == 'ascending') {
            sortAscendingBtn.classList.add(activeClass);
        } else if (settings.sequence == 'descending') {
            sortDescendingBtn.classList.add(activeClass);
        }
    }

    function setViewList() {
        if (settings.activeListType == 'table-list') {
            changeToTableBtn.classList.add(activeClass);
        } else if (settings.activeListType == 'preview-list') {
            changeToPreviewBtn.classList.add(activeClass);
        }
    }



    setLanguage();
    setSortBy();
    setSequence();
    setViewList();
}

export default setDefaultSettings;