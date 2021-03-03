import { data } from '../storage/jsonData.js';
import { settings } from '../storage/elementsValues.js';

const sortBy = (value) => {
    
    function sorting() {
        data.sort(byField(value));

        if (settings.sequence == 'descending') data.reverse();
    }

    function byField(field) {

        if (field == 'name') {
            return (a, b) => {
                if(a[field][settings.globalLanguage] >
                    b[field][settings.globalLanguage]) {
                    return 1;
                } else {
                    return -1;
                }
            }
        } else {
            return (a, b) => a[field] >b [field] ? 1 : -1;
        }

    }

    sorting();
}

export default sortBy;