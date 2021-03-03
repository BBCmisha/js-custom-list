import { data } from './storage/jsonData.js';
import { settings } from './storage/elementsValues.js';
import autoplay from './modules/autoplay.js';
import { dataLoader } from './modules/dataLoader.js';
import languageSetter from './modules/languageSetter.js';
import setDefaultSettings from './modules/setDefaultSettings.js';
import listInitializing from './modules/listInitializing.js';
import languageSwitcherListener from './eventsListeners/languageSwitcher_evl.js';
import listViewSwitcherListener from './eventsListeners/listViewSwitcher_evl.js';
import filterSwitcherListener from './eventsListeners/filterSwitcher_evl.js';
import sortBySwitcherListener from './eventsListeners/sortBySwitcher_evl.js';
import activeButtonListener from './eventsListeners/activeButton_evl.js';


document.addEventListener('DOMContentLoaded', async () => {
    await dataLoader('../data/data.json');
    init();
});

window.addEventListener('scroll', autoplay);

document.addEventListener('click', (e) => {
    if (e.target.nodeName == 'VIDEO') {
        window.removeEventListener('scroll', autoplay);
    }

    if (e.target.classList.contains('preview-list__favourite') ||
        e.target.classList.contains('table-list__favourite')) {

        e.target.classList.toggle('favourite_active')
    }
});


function init() {
    listInitializing(settings.activeListType, data, settings.globalLanguage);
    languageSetter(settings.globalLanguage);
    setDefaultSettings();
    languageSwitcherListener();
    listViewSwitcherListener();
    filterSwitcherListener();
    sortBySwitcherListener();
    activeButtonListener();

}