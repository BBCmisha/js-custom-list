export const elementsValues = 
[
    {
        dataAttr: 'sortByIdButton',
        value: {
            en: 'ID',
            ru: 'ID'
        }
    },
    {
        dataAttr: 'sortByNameButton',
        value: {
            en: 'Name',
            ru: 'Имя'
        }
    },
    {
        dataAttr: 'sortByAgeButton',
        value: {
            en: 'Age',
            ru: 'Возраст'
        }
    },
    {
        dataAttr: 'sortAscendingButton',
        value: {
            en: 'By ascending',
            ru: 'По возрастанию'
        }
    },
    {
        dataAttr: 'sortDescendingButton',
        value: {
            en: 'By descending',
            ru: 'По убыванию'
        }
    },
    {
        dataAttr: 'changeToTableButton',
        value: {
            en: 'Table',
            ru: 'Таблица'
        }
    },
    {
        dataAttr: 'changeToPreviewButton',
        value: {
            en: 'Previews',
            ru: 'Превью'
        }
    },
    {
        dataAttr: 'filterInputByName',
        value: {
            en: 'Enter name',
            ru: 'Введите имя'
        }
    },
    {
        dataAttr: 'filterButtonByName',
        value: {
            en: 'Search',
            ru: 'Найти'
        }
    },
    {
        dataAttr: 'age',
        value: {
            en: 'years',
            ru: 'лет'
        }
    },
    {
        dataAttr: 'settingsSpan',
        value: {
            en: '.Settings',
            ru: '.Settings'
        }
    },
    {
        dataAttr: 'sorterSpan',
        value: {
            en: '.Sorting',
            ru: '.Сортировка'
        }
    },
    {
        dataAttr: 'sorterBySpan',
        value: {
            en: '.Sequence',
            ru: '.Последовательность'
        }
    },
    {
        dataAttr: 'filterSpan',
        value: {
            en: '.Filter',
            ru: '.Фильтр'
        }
    },
    {
        dataAttr: 'languageSpan',
        value: {
            en: '.Language',
            ru: '.Язык'
        }
    },
    {
        dataAttr: 'viewsSpan',
        value: {
            en: '.List type',
            ru: '.Тип списка'
        }
    }
];

export let settings = {
    globalLanguage: 'en',                   // Parameters ---> ['ru', 'en']
    activeListType: 'table-list',         // Parameters ---> ['table-list', 'preview-list']
    sortField: 'id',                       // Parameters ---> ['id', 'name', 'age']
    sequence: 'ascending',                  // Parameters ---> ['ascending', 'descending']
    filterKey: 'name',                      // Parameters ---> ['name']
    filterValue: '',                        // Parameters ---> get value from filter input
}

export let videoInCenter = {
    el: ''
};