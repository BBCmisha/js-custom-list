import { elementsValues, settings } from '../storage/elementsValues.js';
import sortBy from './sortBy.js';
import filter from './filter.js';

const listInitializing = (listClass, data, language) => {
    let wrapper = document.querySelector('.list-wrapper');
    let listNodeTmp = `<div class="${listClass}"></div>`;

    function initList() {
        // if (wrapper.querySelector(`.${listClass}`)) return;

        wrapper.innerHTML = listNodeTmp;

        fillList();
    }

    function fillList() {
        let filledList = '';
        let listNode = document.querySelector(`.${listClass}`);
        let func = (listClass == 'table-list') ? filledTableListTemplate : filledPreviewListTemplate;

        processedData.forEach( (item) => {
            filledList += func(item);
        })

        listNode.innerHTML = filledList;

        if (processedData.length != 0) makeAnimate();
    }

    function makeAnimate() {
        let elements = document.querySelectorAll(`.${listClass}__item`);
        let count = 0;

        setTimeout(function go() {
            elements[count].style.opacity = 1;
            
            if (count < elements.length - 1) {
              setTimeout(go, 70);
            }

            count++;
          }, 70);
    }

    function getDataValue(dAttr) {
        let value ='';

        elementsValues.forEach((item => {
            if (item.dataAttr == dAttr) value = item.value[language];
        }))

        return value;
    }

    function filledTableListTemplate(dataItem) {
         return `
        <div id="${dataItem.id}" class="table-list__item">
            <span class="table-list__id">${dataItem.id}</span>
            <div class="table-list__icon">
                <img src="./assets/images/${dataItem.image}.svg" alt="icon">
            </div>
            <h3 class="table-list__name" data-value-list="name">${dataItem.name[language]}</h3>
            <p class="table-list__age">${dataItem.age} <span data-value="age">${getDataValue('age')}</span></p>
            <p class="table-list__phone">${dataItem.phone}</p>
            <div class="table-list__favourite"></div>
        </div>`;
    }

    function filledPreviewListTemplate(dataItem) {
        let videoNode = '';
        let fillWidthStyle = '';

        if (dataItem.video) {
            videoNode = `<video src="./assets/videos/${dataItem.video}.mp4" controls="controls" loop muted></video>`;
            fillWidthStyle = ' style="width: 100%"';
        }

        return `
        <div id="${dataItem.id}" class="preview-list__item"${fillWidthStyle}>
            <div class="preview-list__info">
            <span class="preview-list__id">${dataItem.id}</span>
                <div class="preview-list__icon">
                    <img src="./assets/images/${dataItem.image}.svg" alt="icon">
                </div>
                <h3 class="preview-list__name" data-value-list="name">${dataItem.name[language]}</h3>
                <p class="preview-list__age">${dataItem.age} <span data-value="age">${getDataValue('age')}</span></p>
                <p class="preview-list__phone">${dataItem.phone}</p>
                <p class="preview-list__phrase" data-value-list="phrase">${dataItem.phrase[language]}</p>
                <div class="preview-list__favourite"></div>
            </div>
            ${videoNode}
        </div>`;
    }


    if (listClass != 'table-list' && listClass != 'preview-list') {
        console.log('[ERROR] Wrong class passed to function!');
        return;
    }

    sortBy(settings.sortField);
    let processedData = filter(data, settings.filterKey, settings.filterValue);
    
    console.log(`[INFO] List with class <${listClass}> init!`);
    initList();
}

export default listInitializing;