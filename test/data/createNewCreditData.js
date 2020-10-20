const creditPageData = {
    header: 'New Line Of Credit',
    creditApr: '35',
    creditLimit: '1000',
    creditAprNotNumber: '3@%',
    creditLimitNotNumber: '1000$$$$',
    emptyCreditAprField: '',
    emptyCreditLimitField: ''
}
const errorMessage = {
    oneErrorMessage: '1 errors prohibited this line_of_credit from being saved:',
    twoErrorsMessage: '2 errors prohibited this line_of_credit from being saved:',
    threeErrorsMessage: '3 errors prohibited this line_of_credit from being saved:',
    fourErrorsMessage: '4 errors prohibited this line_of_credit from being saved:',
    aprFieldBlank: 'Apr can\'t be blank',
    aprNotNumber: 'Apr is not a number',
    creditLimitFieldBlank: 'Credit limit can\'t be blank',
    creditLimitNotNumber: 'Credit limit is not a number'
}
export {creditPageData, errorMessage};