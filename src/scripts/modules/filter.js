/* The function is designed to filter the list of users by name
** params:
**      data - all user data
**      key - the key under which the comparison field is located in the data
**      value - the value with which to compare the field
*/

const filter = (data, key, value) => {
    let trimedValue = value.trim();         // Remove spaces on the side

    function getDataByValue() {             // Function for comparing data value
        let results = [];                   // and value from input

        data.forEach((item) => {
            if (item[key] == trimedValue) {
                results.push(item)
            } else if (typeof(item[key]) == 'object') {
                let enW = item[key].en;
                let ruW = item[key].ru;

                if (isMatch(enW, trimedValue) || isMatch(ruW, trimedValue)) {
                    results.push(item);
                }
            }
        })

        return results;
    }

    function isMatch(a, b) {                    // Function to compare
        let aLower = a.toLowerCase();           // two text fields
        let bLower = b.toLowerCase();
        
        if (aLower == bLower) {
            return true;
        } else if (aLower.includes(bLower)) {
            return true;
        } else {
            let bReverse = bLower.split(' ').reverse().join(' ');
            if (aLower == bReverse) return true;
            return false;
        }
    }

    if (value == '') return data;               // If the comparison is empty

    return getDataByValue();
}

export default filter;