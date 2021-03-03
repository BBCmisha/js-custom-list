import  { elementsValues, settings } from '../storage/elementsValues.js';
import filter from './filter.js'
import { data } from '../storage/jsonData.js'

const languageSetter = (language) => {

    function switchValue() {
        elementsValues.forEach( (item) => {
            let dAttr = item.dataAttr;
            let dVal = item.value[language];

            setElementValue(dAttr, dVal);
        });

        setListValue();
    }
    
    function setElementValue(dataAttribute, value) {
        let elements = document.querySelectorAll(`[data-value="${dataAttribute}"]`);

        elements.forEach( (item) => {
            if (item.tagName == 'INPUT') {
                item.setAttribute('placeholder', value);
            } else {
                item.innerHTML = '';
                item.innerHTML += value;
            }
        });
    }

    function setListValue() {
        let wraper = document.querySelector('.list-wrapper');
        let listItems = wraper.querySelectorAll('[id]');

        listItems.forEach((item) => {
            let dataForItem = filter(data, 'id', item.getAttribute('id'))[0];
            let itemChildrens = item.querySelectorAll('[data-value-list]');

            itemChildrens.forEach((itemC) => {
                itemC.innerHTML = dataForItem[itemC.getAttribute('data-value-list')][language];
            })
        })
    }

    settings.globalLanguage = language;
    switchValue();
}

export default languageSetter;