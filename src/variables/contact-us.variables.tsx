const countryList = require('country-list');
const countryListArr: any[] = countryList && countryList.getCodeList();
const countries: any[] = [];

for(const key in countryListArr) {
    countries.push({
        code: key,
        name: countryListArr[key]
    })
}


export {
    countries
}
