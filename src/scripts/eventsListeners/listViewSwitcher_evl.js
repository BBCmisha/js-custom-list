import { data } from '../storage/jsonData.js';
import { settings } from '../storage/elementsValues.js';
import listInitializing from '../modules/listInitializing.js';

const listViewSwitcherListener = () => {
    let tableSwitcherButton = document.querySelector('[data-value="changeToTableButton"]');
    let previewSwitcherButton = document.querySelector('[data-value="changeToPreviewButton"]');


    tableSwitcherButton.addEventListener('click', ()=> {
        settings.activeListType = 'table-list';
        listInitializing(settings.activeListType, data, settings.globalLanguage);
    });

    previewSwitcherButton.addEventListener('click', () => {
        settings.activeListType = 'preview-list';
        listInitializing(settings.activeListType, data, settings.globalLanguage);
    });
}

export default listViewSwitcherListener;