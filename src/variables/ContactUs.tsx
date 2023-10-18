const countryList = require('country-list');
const countryListArr: any[] = countryList && countryList.getCodeList();
const countries: any[] = [];

// const email: string = 'customerservice@wearenations.com';
const email: string = 'lcshop@gmail.com';

for(const key in countryListArr) {
    countries.push({
        code: key,
        name: countryListArr[key]
    })
}


export {
    countries,
    email
}
